"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatusModel = void 0;
class AppointmentStatusModel {
    constructor(status) {
        this.status = status;
    }
    equals(entity) {
        if (!(entity instanceof AppointmentStatusModel))
            return false;
        return this.status === entity.status;
    }
}
exports.AppointmentStatusModel = AppointmentStatusModel;
//# sourceMappingURL=AppointmentStatusModel.js.map