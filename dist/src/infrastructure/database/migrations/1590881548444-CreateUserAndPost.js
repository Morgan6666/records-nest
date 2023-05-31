"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAndPost1590881548444 = void 0;
class CreateUserAndPost1590881548444 {
    constructor() {
        this.name = 'CreateUserAndPost1590881548444';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying(50) NOT NULL, "text" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, CONSTRAINT "UNIQUE_USERS" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_USERS" ON "users" ("name", "email") `);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`DROP INDEX "IDX_USERS"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "posts"`);
    }
}
exports.CreateUserAndPost1590881548444 = CreateUserAndPost1590881548444;
//# sourceMappingURL=1590881548444-CreateUserAndPost.js.map