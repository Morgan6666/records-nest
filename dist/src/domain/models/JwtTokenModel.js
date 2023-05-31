"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenModel = void 0;
class JwtTokenModel {
    constructor(id) {
        this.id = id;
    }
    equals(entity) {
        if (!(entity instanceof JwtTokenModel))
            return false;
        return this.id === entity.id;
    }
}
exports.JwtTokenModel = JwtTokenModel;
//# sourceMappingURL=JwtTokenModel.js.map