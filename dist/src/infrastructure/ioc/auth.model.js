"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const IAuthRepository_1 = require("../../application/ports/IAuthRepository");
const AuthUseCase_1 = require("../../application/use-cases/AuthUseCase");
const AuthRepository_1 = require("../database/repositories/AuthRepository");
const common_1 = require("@nestjs/common");
const secretConstants_1 = require("../utils/secretConstants");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: secretConstants_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [
            AuthUseCase_1.AuthUseCase,
            { provide: IAuthRepository_1.IAuthRepository, useClass: AuthRepository_1.AuthRepository },
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.model.js.map