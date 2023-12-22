import Koa from "koa"
import user from "./routers/user_router";
import koaBody from "koa-body";

const app = new Koa();

app.use(koaBody());

app.use(user);

app.use(async (ctx) => {
    ctx.body = "hello!";
});

export const server = app.callback();