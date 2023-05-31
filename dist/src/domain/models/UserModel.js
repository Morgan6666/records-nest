"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
    equals(entity) {
        if (!(entity instanceof UserModel))
            return false;
        return this.email === entity.email;
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map