export class AddWeb3Publickey1704725875107 {
	name = "AddWeb3Publickey1704725875107";

	async up(queryRunner) {
		await queryRunner.query(
			`ALTER TABLE "user_profile" ADD "web3Publickey" character varying(128) NOT NULL DEFAULT ''`,
		);
	}

	async down(queryRunner) {
		await queryRunner.query(
			`ALTER TABLE "user_profile" DROP COLUMN "web3Publickey"`,
		);
	}
}
