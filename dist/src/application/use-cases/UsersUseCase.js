"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UsersUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUseCase = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const IUsersRepository_1 = require("../ports/IUsersRepository");
const appointment_schema_1 = require("../../infrastructure/schemas/appointment.schema");
const record_schema_1 = require("../../infrastructure/schemas/record.schema");
const ServiceResponse_1 = require("../../infrastructure/utils/ServiceResponse");
const mongoose_2 = require("mongoose");
const bcrypt = __importStar(require("bcrypt"));
const secretConstants_1 = require("../../infrastructure/utils/secretConstants");
const AuthUseCase_1 = require("./AuthUseCase");
let UsersUseCase = UsersUseCase_1 = class UsersUseCase {
    constructor(recModel, appModel, userRepo, authUseCase) {
        this.recModel = recModel;
        this.appModel = appModel;
        this.userRepo = userRepo;
        this.authUseCase = authUseCase;
        this.logger = new common_1.Logger(UsersUseCase_1.name);
        this.serviceRes = new ServiceResponse_1.ServiceResponse();
    }
    async addUser(data) {
        this.logger.log(`Проверяем существование пользователя`);
        const check = await this.userRepo.checkUser(data.email);
        if (check) {
            this.logger.log(`Пользователь уже существует`);
            return this.serviceRes.userAlreadyExist();
        }
        else {
            this.logger.log(`Создаём пользователя`);
            let encrPassword = await bcrypt.hash(data.password, secretConstants_1.salt);
            data.password = encrPassword;
            const result = await this.userRepo.addUser(data);
            console.log(result);
            const tokens = await this.authUseCase.calculateTokens(result);
            return this.serviceRes.uniqueSuccessRes(tokens);
        }
    }
    async addRecord(token, data) {
        const verify = await this.authUseCase.verifyUser(token);
        if (verify.Success === true) {
            this.logger.log(`Проверяем наличие записи в бд`);
            const record = await this.recModel.findOne({
                doc_id: verify["Content"].id,
            });
            if (record) {
                this.logger.log(`Запись уже существует`);
                return this.serviceRes.recordAlreadyExists();
            }
            else {
                this.logger.log(`Добавляем запись`);
                data.doc_id = verify["Content"].id;
                this.logger.log(`Добавляем запись в бд`);
                const rec = await this.recModel.create(data);
                return this.serviceRes.recordAddedSuccess();
            }
        }
        else {
            return verify;
        }
    }
    async addAppointment(token, data) {
        const verify = await this.authUseCase.verifyUser(token);
        if (verify.Success === true) {
            this.logger.log(`Получаем id доктора`);
            const doc = await this.userRepo.checkUser(data.doc_email);
            if (doc) {
                this.logger.log("Проверяем существоание записи");
                const doc_id = doc.id;
                const user_id = verify["Content"].id;
                const userRec = await this.appModel.findOne({
                    doc_id: doc_id,
                    user_id: user_id,
                    time_received: data.time_receipt,
                });
                if (userRec) {
                    this.logger.log(`Запись уже существует`);
                    return this.serviceRes.recordAlreadyExists();
                }
                else {
                    this.logger.log(`Проверяем запись в диапозоне доп.времени`);
                    const record = await this.recModel.findOne({ doc_id: doc_id });
                    if (record.slots.includes(data.time_receipt)) {
                        this.logger.log(`Запись попадает во временной диапозон`);
                        const rec = await this.appModel.create({
                            doc_id: doc_id,
                            user_id: user_id,
                            time_received: data.time_receipt,
                            done: false,
                        });
                        return this.serviceRes.recordAddedSuccess();
                    }
                    else {
                        this.logger.log(`Запись не попадает во временной промежуток`);
                        return this.serviceRes.recordBadTime();
                    }
                }
            }
            else {
                this.logger.log(`Доктор не существует`);
                return this.serviceRes.doctorDoesntExists();
            }
        }
        else {
            return verify;
        }
    }
    async updateAppoStatus(token, data) {
        const verify = await this.authUseCase.verifyUser(token);
        if (verify.Success === true) {
            this.logger.log(`Получаем данные пользователя`);
            const user = await this.userRepo.checkUser(data.user_email);
            if (user) {
                this.logger.log(`Проверяем статус записи`);
                console.log(verify["Content"].id, user.id);
                const rec = await this.appModel.findOne({
                    doc_id: verify["Content"].id,
                    user_id: user.id
                });
                console.log(rec);
                if (rec) {
                    if (rec.done) {
                        this.logger.log("Запись уже завершилась");
                        return this.serviceRes.recordClose();
                    }
                    else {
                        this.logger.log(`Обновляем статус записи`);
                        const updStatus = await this.appModel.findByIdAndUpdate(rec.id, {
                            done: true,
                        });
                        return this.serviceRes.recordSuccessUpdated();
                    }
                }
                else {
                    this.logger.log(`Запись не не найдена`);
                    return this.serviceRes.recordDoesntExist();
                }
            }
            else {
                this.logger.log(`Пользователь не найден`);
                return this.serviceRes.userNotFound();
            }
        }
        else {
            return verify;
        }
    }
};
UsersUseCase = UsersUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(record_schema_1.Record.name)),
    __param(1, (0, mongoose_1.InjectModel)(appointment_schema_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        IUsersRepository_1.IUserReposity,
        AuthUseCase_1.AuthUseCase])
], UsersUseCase);
exports.UsersUseCase = UsersUseCase;
//# sourceMappingURL=UsersUseCase.js.map