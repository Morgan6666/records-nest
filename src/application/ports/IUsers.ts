import { Injectable } from "@nestjs/common";



@Injectable()
export abstract class IUser<Entity>{
    abstract addUser(entity: Entity);
    abstract checkUser(email: string);
    abstract getDocInfo(doc_email: string);
   
    
}