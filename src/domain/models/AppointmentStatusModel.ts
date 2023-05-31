import { IEntity } from "domain/shared/IEntity";


export class AppointmentStatusModel implements IEntity {
    user_email?: string; 
    status?: boolean;
    constructor(status?: boolean){
        this.status = status;
    }
    equals(entity: IEntity): boolean {
        if (!(entity instanceof AppointmentStatusModel)) return false;
        return this.status === entity.status;
      }
}