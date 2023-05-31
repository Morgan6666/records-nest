"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRelationship1590889425093 = void 0;
class UpdateRelationship1590889425093 {
    constructor() {
        this.name = 'UpdateRelationship1590889425093';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
}
exports.UpdateRelationship1590889425093 = UpdateRelationship1590889425093;
//# sourceMappingURL=1590889425093-UpdateRelationship.js.map