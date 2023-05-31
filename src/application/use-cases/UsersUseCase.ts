import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IUserReposity } from "application/ports/IUsersRepository";
import { UserModel } from "domain/models/UserModel";
import {
  Appointment,
  AppointmentDocument,
} from "infrastructure/schemas/appointment.schema";
import { Record, RecordDocumnet } from "infrastructure/schemas/record.schema";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { Model } from "mongoose";
import { check } from "yargs";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { salt } from "infrastructure/utils/secretConstants";
import { JwtTokenModel } from "domain/models/JwtTokenModel";
import { AuthUseCase } from "./AuthUseCase";
import { RecordModel } from "domain/models/RecordModel";
import { AppointmentModel } from "domain/models/AppointmentModel";
import { AppointmentStatusModel } from "domain/models/AppointmentStatusModel";
import { identifier, throwStatement } from "@babel/types";
import { doc } from "prettier";

@Injectable()
export class UsersUseCase {
  private readonly logger = new Logger(UsersUseCase.name);
  public serviceRes = new ServiceResponse();
  constructor(
    @InjectModel(Record.name) private recModel: Model<RecordDocumnet>,
    @InjectModel(Appointment.name) private appModel: Model<AppointmentDocument>,

    private readonly userRepo: IUserReposity,
    private readonly authUseCase: AuthUseCase
  ) {}

  async addUser(data: UserModel) {
    this.logger.log(`Проверяем существование пользователя`);
    const check = await this.userRepo.checkUser(data.email);
    if (check) {
      this.logger.log(`Пользователь уже существует`);
      return this.serviceRes.userAlreadyExist();
    } else {
      this.logger.log(`Создаём пользователя`);
      let encrPassword = await bcrypt.hash(data.password, salt);
      data.password = encrPassword;
      const result = await this.userRepo.addUser(data);
      console.log(result);
      const tokens = await this.authUseCase.calculateTokens(result);
      return this.serviceRes.uniqueSuccessRes(tokens);
    }
  }


  async addRecord(token: string, data: RecordModel) {
    const verify = await this.authUseCase.verifyUser(token);
    if (verify.Success === true) {
      this.logger.log(`Проверяем наличие записи в бд`);
      const record = await this.recModel.findOne({
        doc_id: verify["Content"].id,
      });
      if (record) {
        this.logger.log(`Запись уже существует`);
        return this.serviceRes.recordAlreadyExists();
      } else {
        this.logger.log(`Добавляем запись`);
        data.doc_id = verify["Content"].id;
        this.logger.log(`Добавляем запись в бд`);
        
        const rec = await this.recModel.create(data);
        return this.serviceRes.recordAddedSuccess();
      }
    } else {
      return verify;
    }
  }

  async addAppointment(token: string, data: AppointmentModel) {
    const verify = await this.authUseCase.verifyUser(token);
    if (verify.Success === true) {
      this.logger.log(`Получаем id доктора`);
      const doc = await this.userRepo.checkUser(data.doc_email);
      
      if (doc) {
        this.logger.log("Проверяем существоание записи");
        const doc_id = doc.id;
        const user_id = verify["Content"].id
        const userRec = await this.appModel.findOne({
          doc_id: doc_id,
          user_id: user_id,
          time_received: data.time_receipt,
        });
        if (userRec) {
          this.logger.log(`Запись уже существует`);
          return this.serviceRes.recordAlreadyExists();
        } else {
          this.logger.log(`Проверяем запись в диапозоне доп.времени`);
          const record = await this.recModel.findOne({ doc_id: doc_id });
          if (
            record.slots.includes(data.time_receipt)
          ) {
            this.logger.log(`Запись попадает во временной диапозон`);

            const rec = await this.appModel.create({
              doc_id: doc_id,
              user_id: user_id,
              time_received: data.time_receipt,
              done: false,
            });
            return this.serviceRes.recordAddedSuccess();
          }
          else{
            this.logger.log(`Запись не попадает во временной промежуток`);
            return this.serviceRes.recordBadTime();
          }
        }
      } else {
        this.logger.log(`Доктор не существует`);
        return this.serviceRes.doctorDoesntExists();
      }
    } else {
      return verify;
    }
  }

  async updateAppoStatus(token: string, data: AppointmentStatusModel) {
    const verify = await this.authUseCase.verifyUser(token);
    if (verify.Success === true) {
      this.logger.log(`Получаем данные пользователя`);
      const user = await this.userRepo.checkUser(data.user_email);
      if (user) {
        this.logger.log(`Проверяем статус записи`);
        console.log(verify["Content"].id,
        user.id)
        const rec = await this.appModel.findOne({
          doc_id: verify["Content"].id,
          user_id: user.id
        });
        console.log(rec);
        if(rec){
          if (rec.done) {
            this.logger.log("Запись уже завершилась");
            return this.serviceRes.recordClose();
          } else {
            this.logger.log(`Обновляем статус записи`);
            const updStatus = await this.appModel.findByIdAndUpdate(rec.id, {
              done: true,
            });
            return this.serviceRes.recordSuccessUpdated();
          }
        }
        else{
          this.logger.log(`Запись не не найдена`);
          return this.serviceRes.recordDoesntExist();
        }
        
      } else {
        this.logger.log(`Пользователь не найден`);
        return this.serviceRes.userNotFound();
      }
    } else {
      return verify;
    }
  }
}
