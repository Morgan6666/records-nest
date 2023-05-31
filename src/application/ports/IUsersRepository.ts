import { Injectable } from "@nestjs/common";
import { IUser } from "./IUsers";
import { UserModel } from "domain/models/UserModel";



@Injectable()
export abstract class IUserReposity extends IUser<UserModel>{}