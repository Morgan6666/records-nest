import { IAuthRepository } from "application/ports/IAuthRepository";
import { AuthUseCase } from "application/use-cases/AuthUseCase";
import { AuthRepository } from "infrastructure/database/repositories/AuthRepository";
import { Module } from "@nestjs/common";
import { jwtConstants } from "infrastructure/utils/secretConstants";
import { JwtModule } from "@nestjs/jwt";


@Module({
    imports:[
        JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
    providers: [
        AuthUseCase,
        {provide: IAuthRepository, useClass: AuthRepository},

    ]
})
export class AuthModule {}