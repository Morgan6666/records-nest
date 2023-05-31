import { NumberLiteralTypeAnnotation } from "@babel/types";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Timestamp } from "typeorm";


export type AppointmentDocument = Appointment & Document;

@Schema({timestamps: true})
export class Appointment {

    @Prop({required: true})
    doc_id: number;

    @Prop({required: true})
    user_id: number;

    @Prop({required: true})
    time_received: Date;

    @Prop({required: true})
    done: boolean;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);