import { Injectable } from "@nestjs/common";
import { UserModel } from "domain/models/UserModel";
import { BaseRepository } from "./BaseRepository";
import { IAuth } from "application/ports/IAuth";
import { Connection } from "typeorm";
import { InjectConnection } from "@nestjs/typeorm";
import { UserEntity } from "../mapper/UserEntity";
import { IAuthRepository } from "application/ports/IAuthRepository";



@Injectable()
export class AuthRepository extends BaseRepository<UserModel>
implements IAuthRepository {
    connection: Connection;
    constructor(
        @InjectConnection() connection: Connection,
      ) {
        super(connection, UserEntity);
        this.connection = connection;
      }
      async checkUserExist(id: number, is_doc: boolean) {
        const result = await this.connection.query(`SELECT email FROM users WHERE id=${id} AND is_doc=${is_doc}`);
        if(result){
          const data = result[0];
          return data;
        }
        else{
          null;
        }
          
      }
    }