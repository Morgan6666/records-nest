import { BaseRepository } from "./BaseRepository";
import { UserModel } from "domain/models/UserModel";
import { IUserReposity } from "application/ports/IUsersRepository";
import { Connection } from "typeorm";
export declare class UserRepository extends BaseRepository<UserModel> implements IUserReposity {
    connection: Connection;
    constructor(connection: Connection);
    addUser(entity: UserModel): Promise<any>;
    checkUser(email: string): Promise<any>;
    getDocInfo(doc_email: string): Promise<any>;
}
