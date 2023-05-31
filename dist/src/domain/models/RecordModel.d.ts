import { IEntity } from "domain/shared/IEntity";
export declare class RecordModel implements IEntity {
    doc_id?: number;
    slots: [date_time: string];
    equals(entity: IEntity): boolean;
}
