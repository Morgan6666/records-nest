import { IEntity } from "domain/shared/IEntity";
export declare class AppointmentStatusModel implements IEntity {
    user_email?: string;
    status?: boolean;
    constructor(status?: boolean);
    equals(entity: IEntity): boolean;
}
