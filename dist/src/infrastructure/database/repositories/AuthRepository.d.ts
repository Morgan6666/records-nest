import { UserModel } from "domain/models/UserModel";
import { BaseRepository } from "./BaseRepository";
import { Connection } from "typeorm";
import { IAuthRepository } from "application/ports/IAuthRepository";
export declare class AuthRepository extends BaseRepository<UserModel> implements IAuthRepository {
    connection: Connection;
    constructor(connection: Connection);
    checkUserExist(id: number, is_doc: boolean): Promise<any>;
}
