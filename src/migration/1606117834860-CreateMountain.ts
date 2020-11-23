import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMountain1606117834860 implements MigrationInterface {
    name = 'CreateMountain1606117834860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mountain" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "prefecture" character varying NOT NULL, "height" integer NOT NULL, CONSTRAINT "PK_e2bdaf81dad7024b145c7e78abd" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mountain"`, undefined);
    }

}
