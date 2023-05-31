import { IEntity } from "domain/shared/IEntity";
export declare class UserModel implements IEntity {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    isDoctor?: boolean;
    constructor(first_name?: string, last_name?: string, email?: string, password?: string);
    equals(entity: IEntity): boolean;
}
