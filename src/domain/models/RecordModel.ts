import { StringLiteral } from "@babel/types";
import { IEntity } from "domain/shared/IEntity";
import { Timestamp } from "typeorm";


export class RecordModel implements IEntity {
  doc_id?: number;
    slots: [date_time: string]

    equals(entity: IEntity): boolean {
        if (!(entity instanceof RecordModel)) return false;
        return this.slots === entity.slots;
      }
}