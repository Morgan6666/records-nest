"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordModel = void 0;
class RecordModel {
    equals(entity) {
        if (!(entity instanceof RecordModel))
            return false;
        return this.slots === entity.slots;
    }
}
exports.RecordModel = RecordModel;
//# sourceMappingURL=RecordModel.js.map