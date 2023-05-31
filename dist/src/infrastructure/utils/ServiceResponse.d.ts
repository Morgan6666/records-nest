export declare class ServiceResponse {
    uniqueServiceErrorRes(success: boolean, code: number, message: string): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordBadTime(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordAddedSuccess(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordSuccessUpdated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    uniqueServiceRes(success: boolean, code: number, message: string, content: object): {
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    };
    recordClose(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    serviceUserError(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    serviceMarketError(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    drugSuccessAdded(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    uniqueSuccessRes(content: Object): {
        Success: boolean;
        Message: string;
        Code: number;
        Content: object;
    };
    serviceStorageError(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    catelgoriesNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    recordDoesntExist(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    polisSuccessAdded(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    passwordMismatch(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    polisAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    documnetsNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    documentsAddSuccessfully(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    documentsAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    patientsNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userNotFound(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    passwordSuccessUpdate(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userAlreadyExist(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userSuccessfulyCreated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    userNotAuthorisated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    metaSuccessfulyAdded(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    internalServerError(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    doctorAlreadyExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    doctorDoesntExists(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
    doctorSuccessfulyCreated(): {
        Success: boolean;
        Message: string;
        Code: number;
    };
}
