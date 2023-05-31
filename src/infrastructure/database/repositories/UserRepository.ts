import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./BaseRepository";
import { UserModel } from "domain/models/UserModel";
import { IUserReposity } from "application/ports/IUsersRepository";
import { Connection } from "typeorm";
import { InjectConnection } from "@nestjs/typeorm";
import { UserEntity } from "../mapper/UserEntity";
import e from "express";
import { AppointmentModel } from "domain/models/AppointmentModel";
import { Touchscreen } from "puppeteer";



@Injectable()
export class UserRepository extends BaseRepository<UserModel>
implements IUserReposity {
    connection: Connection;
    constructor(
        @InjectConnection() connection: Connection,
      ) {
        super(connection, UserEntity);
        this.connection = connection;
      }

       async addUser(entity: UserModel) {
        const result = await this.connection.query(
          `
          INSERT INTO users(first_name, last_name, email, password, is_doc) VALUES('${entity.first_name}','${entity.last_name}','${entity.email}', '${entity.password}', ${entity.isDoctor}) RETURNING id,is_doc;
        `);
        if(result){
          const data = result[0];
          return data;
        }
        else{
          return null;
        }
          
      }

      async checkUser(email: string) {
        console.log(email)
        const result = await this.connection.query(`SELECT id FROM users WHERE email='${email}'`);
        if(result){
          const data = result[0];
          return data;
        }
        else{
          return null;
        }
        
      }

    

       async getDocInfo(doc_email: string) {
          const result = await this.connection.query(`SELECT id FROM users WHERE email='${doc_email}' AND is_doc=true`);
          if(result){
            const data = result[0];
            return data;
          }
          else{
            return null;
          }  
      }

     
     

    
}