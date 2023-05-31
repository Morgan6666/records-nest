import { IEntity } from "domain/shared/IEntity";
export declare class AppointmentModel implements IEntity {
    doc_email?: string;
    time_receipt?: string;
    equals(entity: IEntity): boolean;
}
