"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const IUsersRepository_1 = require("../../application/ports/IUsersRepository");
const AuthUseCase_1 = require("../../application/use-cases/AuthUseCase");
const UsersUseCase_1 = require("../../application/use-cases/UsersUseCase");
const UserRepository_1 = require("../database/repositories/UserRepository");
const appointment_schema_1 = require("../schemas/appointment.schema");
const record_schema_1 = require("../schemas/record.schema");
const UsersController_1 = require("../../presentation/controllers/UsersController");
const auth_model_1 = require("./auth.model");
const IAuthRepository_1 = require("../../application/ports/IAuthRepository");
const AuthRepository_1 = require("../database/repositories/AuthRepository");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb://localhost:27017"),
            mongoose_1.MongooseModule.forFeature([
                { name: record_schema_1.Record.name, schema: record_schema_1.RecordSchema },
                { name: appointment_schema_1.Appointment.name, schema: appointment_schema_1.AppointmentSchema },
            ]),
            auth_model_1.AuthModule,
        ],
        controllers: [UsersController_1.UsersController],
        providers: [
            UsersUseCase_1.UsersUseCase,
            { provide: IUsersRepository_1.IUserReposity, useClass: UserRepository_1.UserRepository },
            AuthUseCase_1.AuthUseCase,
            { provide: IAuthRepository_1.IAuthRepository, useClass: AuthRepository_1.AuthRepository }
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.model.js.map