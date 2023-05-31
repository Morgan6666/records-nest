import { Injectable } from "@nestjs/common";



@Injectable()
export abstract class IAuth<Entity>{
    abstract checkUserExist(id:number, is_doc: boolean);
}