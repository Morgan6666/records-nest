import { IUserReposity } from "application/ports/IUsersRepository";
import { UserModel } from "domain/models/UserModel";
import { AppointmentDocument } from "infrastructure/schemas/appointment.schema";
import { RecordDocumnet } from "infrastructure/schemas/record.schema";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { Model } from "mongoose";
import { AuthUseCase } from "./AuthUseCase";
import { RecordModel } from "domain/models/RecordModel";
import { AppointmentModel } from "domain/models/AppointmentModel";
import { AppointmentStatusModel } from "domain/models/AppointmentStatusModel";
export declare class UsersUseCase {
    private recModel;
    private appModel;
    private readonly userRepo;
    private readonly authUseCase;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(recModel: Model<RecordDocumnet>, appModel: Model<AppointmentDocument>, userRepo: IUserReposity, authUseCase: AuthUseCase);
    addUser(data: UserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addRecord(token: string, data: RecordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addAppointment(token: string, data: AppointmentModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    updateAppoStatus(token: string, data: AppointmentStatusModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
