import { IEntity } from "domain/shared/IEntity";


export class AppointmentModel implements IEntity {
    doc_email?: string;
    time_receipt?: string;
    
    

    equals(entity: IEntity): boolean {
        if (!(entity instanceof AppointmentModel)) return false;
        return this.doc_email === entity.doc_email;
      }

}

