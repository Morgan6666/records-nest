"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("./BaseEntity");
exports.UserEntity = new typeorm_1.EntitySchema({
    name: "user",
    tableName: "users",
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { first_name: {
            type: String,
        }, last_name: {
            type: String,
        }, email: {
            type: String,
        }, password: {
            type: String,
        } }),
});
//# sourceMappingURL=UserEntity.js.map