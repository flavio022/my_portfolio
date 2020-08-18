import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddImageToProject1597774256506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "projects",
      new TableColumn({
        name: "image",
        type: "varchar",
        isNullable: true
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("projects", "image");
  }
}
