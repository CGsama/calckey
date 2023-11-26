import { HOUR } from "@/const.js";
import { createExportBlockingJob } from "@/queue/index.js";
import define from "@/server/api/define.js";

export const meta = {
	secure: true,
	requireCredential: true,
	limit: {
		duration: HOUR,
		max: 1,
	},
} as const;

export const paramDef = {
	type: "object",
	properties: {},
	required: [],
} as const;

export default define(meta, paramDef, async (ps, user) => {
	createExportBlockingJob(user);
});
