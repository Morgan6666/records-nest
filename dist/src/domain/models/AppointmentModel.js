"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = void 0;
class AppointmentModel {
    equals(entity) {
        if (!(entity instanceof AppointmentModel))
            return false;
        return this.doc_email === entity.doc_email;
    }
}
exports.AppointmentModel = AppointmentModel;
//# sourceMappingURL=AppointmentModel.js.map