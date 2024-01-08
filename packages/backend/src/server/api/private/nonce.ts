import type Koa from "koa";
import config from "@/config/index.js";
import { genId } from "@/misc/gen-id.js";
import { getIpHash } from "@/misc/get-ip-hash.js";
import { redisClient } from "@/db/redis.js";

export default async (ctx: Koa.Context) => {
	ctx.set("Access-Control-Allow-Origin", config.url);
	ctx.set("Access-Control-Allow-Credentials", "true");

	const body = ctx.request.body as any;
	const username = body["username"];

    const nonce = getIpHash(ctx.ip) + genId()
    await redisClient.set(`${username}-web3-nonce`, nonce, 'EX', 10);
	ctx.status = 200;
    ctx.body = {
        name: username,
        nonce: nonce,
    };
    return;
};
