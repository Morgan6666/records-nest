import { Injectable } from "@nestjs/common";
import { IAuth } from "./IAuth";
import { UserModel } from "domain/models/UserModel";



@Injectable()
export abstract class IAuthRepository extends IAuth<UserModel> {}