import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



export type RecordDocumnet = Record & Document;

@Schema({timestamps: true})
export class Record {
    @Prop({required: true})
    doc_id: number;
    
    @Prop({required: true})
    slots: [date_time: string]

   
}

export const RecordSchema = SchemaFactory.createForClass(Record);