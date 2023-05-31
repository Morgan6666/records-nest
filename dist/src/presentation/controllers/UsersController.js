"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const UsersUseCase_1 = require("../../application/use-cases/UsersUseCase");
const AppointmentModel_1 = require("../../domain/models/AppointmentModel");
const AppointmentStatusModel_1 = require("../../domain/models/AppointmentStatusModel");
const RecordModel_1 = require("../../domain/models/RecordModel");
const UserModel_1 = require("../../domain/models/UserModel");
let UsersController = class UsersController {
    constructor(userUsecase) {
        this.userUsecase = userUsecase;
    }
    async sign(data) {
        const result = await this.userUsecase.addUser(data);
        return result;
    }
    async addRecord(token, data) {
        const result = await this.userUsecase.addRecord(token, data);
        return result;
    }
    async addAppo(token, data) {
        const result = await this.userUsecase.addAppointment(token, data);
        return result;
    }
    async updateAppoStatus(token, data) {
        const result = await this.userUsecase.updateAppoStatus(token, data);
        return result;
    }
};
__decorate([
    (0, common_1.Post)("sign"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserModel_1.UserModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sign", null);
__decorate([
    (0, common_1.Post)("record/add/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RecordModel_1.RecordModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addRecord", null);
__decorate([
    (0, common_1.Post)("appo/add/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AppointmentModel_1.AppointmentModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addAppo", null);
__decorate([
    (0, common_1.Put)("appo/up/status/:token"),
    __param(0, (0, common_1.Param)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AppointmentStatusModel_1.AppointmentStatusModel]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateAppoStatus", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)("Users"),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [UsersUseCase_1.UsersUseCase])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=UsersController.js.map