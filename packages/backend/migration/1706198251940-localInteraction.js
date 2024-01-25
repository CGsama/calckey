export class LocalInteraction1706198251940 {
	name = "LocalInteraction1706198251940";

	async up(queryRunner) {
		await queryRunner.query(
			`ALTER TABLE "drive_file" ADD "localInteraction" boolean NOT NULL DEFAULT FALSE`,
		);
		await queryRunner.query(
			`ALTER TABLE "note" ADD "localInteraction" boolean NOT NULL DEFAULT FALSE`,
		);
	}

	async down(queryRunner) {
		await queryRunner.query(
			`ALTER TABLE "drive_file" DROP COLUMN "localInteraction"`,
		);
		await queryRunner.query(
			`ALTER TABLE "note" DROP COLUMN "localInteraction"`,
		);
	}
}
