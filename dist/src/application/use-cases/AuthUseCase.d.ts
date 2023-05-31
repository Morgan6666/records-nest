import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { JwtService } from "@nestjs/jwt";
import { JwtTokenModel } from "domain/models/JwtTokenModel";
import { IAuthRepository } from "application/ports/IAuthRepository";
export declare class AuthUseCase {
    private jwtService;
    private readonly authRepo;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(jwtService: JwtService, authRepo: IAuthRepository);
    decryptJwt(token: string): string | {
        [key: string]: any;
    };
    calculateTokens(user: JwtTokenModel): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    verifyUser(token: string): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
