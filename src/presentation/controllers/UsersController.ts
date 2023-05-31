import { thisTypeAnnotation } from "@babel/types";
import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsersUseCase } from "application/use-cases/UsersUseCase";
import { AppointmentModel } from "domain/models/AppointmentModel";
import { AppointmentStatusModel } from "domain/models/AppointmentStatusModel";
import { RecordModel } from "domain/models/RecordModel";
import { UserModel } from "domain/models/UserModel";


@ApiTags("Users")
@Controller("users")
export class UsersController {
    constructor(private readonly userUsecase: UsersUseCase){}

   @Post("sign")
   async sign(
    @Body() data: UserModel
   ){
    const result = await this.userUsecase.addUser(data);
    return result;
   }

   @Post("record/add/:token")
   async addRecord(
    @Param("token") token,
    @Body() data: RecordModel 
   ) {
    const result = await this.userUsecase.addRecord(token, data);
    return result;
   }

   @Post("appo/add/:token")
   async addAppo(
    @Param("token") token,
    @Body() data: AppointmentModel
   ) {
    const result = await this.userUsecase.addAppointment(token, data);
    return result;
   }

   @Put("appo/up/status/:token")
   async updateAppoStatus(
    @Param("token") token,
    @Body() data: AppointmentStatusModel
   ) {
    const result = await this.userUsecase.updateAppoStatus(token, data);
    return result;
   }
}