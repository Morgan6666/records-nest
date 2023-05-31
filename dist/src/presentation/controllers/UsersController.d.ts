import { UsersUseCase } from "application/use-cases/UsersUseCase";
import { AppointmentModel } from "domain/models/AppointmentModel";
import { AppointmentStatusModel } from "domain/models/AppointmentStatusModel";
import { RecordModel } from "domain/models/RecordModel";
import { UserModel } from "domain/models/UserModel";
export declare class UsersController {
    private readonly userUsecase;
    constructor(userUsecase: UsersUseCase);
    sign(data: UserModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addRecord(token: any, data: RecordModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addAppo(token: any, data: AppointmentModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    updateAppoStatus(token: any, data: AppointmentStatusModel): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
