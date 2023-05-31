import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IUserReposity } from "application/ports/IUsersRepository";
import { AuthUseCase } from "application/use-cases/AuthUseCase";
import { UsersUseCase } from "application/use-cases/UsersUseCase";
import { UserRepository } from "infrastructure/database/repositories/UserRepository";
import {
  Appointment,
  AppointmentSchema,
} from "infrastructure/schemas/appointment.schema";
import { Record, RecordSchema } from "infrastructure/schemas/record.schema";
import { UsersController } from "presentation/controllers/UsersController";
import { AuthModule } from "./auth.model";
import { IAuthRepository } from "application/ports/IAuthRepository";
import { AuthRepository } from "infrastructure/database/repositories/AuthRepository";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017"),
    MongooseModule.forFeature([
      { name: Record.name, schema: RecordSchema },
      { name: Appointment.name, schema: AppointmentSchema },
    ]),
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersUseCase,
    { provide: IUserReposity, useClass: UserRepository },
    AuthUseCase,
    {provide: IAuthRepository, useClass: AuthRepository}
  ],
})
export class UsersModule {}
