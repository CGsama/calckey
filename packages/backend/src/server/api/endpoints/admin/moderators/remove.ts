import define from "@/server/api/define.js";
import { Users } from "@/models/index.js";
import { publishInternalEvent } from "@/services/stream.js";

export const meta = {
	tags: ["admin"],

	requireCredential: true,
	requireAdmin: true,
} as const;

export const paramDef = {
	type: "object",
	properties: {
		userId: { type: "string", format: "misskey:id" },
	},
	required: ["userId"],
} as const;

export default define(meta, paramDef, async (ps) => {
	const user = await Users.findOneBy({ id: ps.userId });

	if (user == null) {
		throw new Error("user not found");
	}

	await Users.update(user.id, {
		isModerator: false,
	});

	publishInternalEvent("userChangeModeratorState", {
		id: user.id,
		isModerator: false,
	});
});
