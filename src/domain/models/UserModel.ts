import { IEntity } from "domain/shared/IEntity";


export class UserModel implements IEntity {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    isDoctor?: boolean;


    constructor(
        first_name?: string,
        last_name?: string,
        email?: string,
        password?: string
    ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof UserModel)) return false;
        return this.email === entity.email;
      }
}