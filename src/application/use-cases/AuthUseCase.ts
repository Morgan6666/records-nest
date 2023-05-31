import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { JwtService } from "@nestjs/jwt";

import { Injectable, Logger } from "@nestjs/common";
import { JwtTokenModel } from "domain/models/JwtTokenModel";
import { IAuthRepository } from "application/ports/IAuthRepository";

@Injectable()
export class AuthUseCase {
  private readonly logger = new Logger(AuthUseCase.name);
  public serviceRes = new ServiceResponse();
  
  constructor(private jwtService: JwtService, private readonly authRepo: IAuthRepository) {}

  decryptJwt(token: string) {
    const decodedJwtAccessToken = this.jwtService.decode(token);
    console.log(decodedJwtAccessToken);
    return decodedJwtAccessToken;
  }

  async calculateTokens(user: JwtTokenModel) {
    console.log(user);
    const access_token = await this.jwtService.signAsync(user, {
      expiresIn: "15m",
    });
    const refresh_token = await this.jwtService.signAsync(user, {
      expiresIn: "7d",
    });
    return { access_token, refresh_token };
  }

  async verifyUser(token: string){
    this.logger.log(`Декодируем токен`);
    const data = this.decryptJwt(token);
    this.logger.log(`Проверяем существование пользователя`);
    const result = await this.authRepo.checkUserExist(data["id"], data["is_doc"]);
    console.log(result);
    if(result){
      this.logger.log(`Пользователь существует`);
      return this.serviceRes.uniqueSuccessRes(data)
    }
    else{
      this.logger.log(`Пользоветель не существует`);
      return this.serviceRes.userNotAuthorisated();
    }
    
    
  }
}
