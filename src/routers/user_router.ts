import Router from "@koa/router"
import User from "../models/user_model";

const router = new Router();

router.post("/users", async (ctx) => {
    let limit: number = ctx.request.body.size || 10;
    limit = limit < 1 ? 1 : limit;
    limit = limit > 100 ? 100 : limit;
    let offset: number = ctx.request.body.page || 1;
    offset = offset < 1 ? 1 : offset;
    const users = await User.findAll({
        attributes: {
            exclude: ["createdAt"]
        },
        where: ctx.query,
        limit: limit,
        offset: (offset - 1) * limit,
    });
    ctx.body = users;
});

router.get("/user/:id", async (ctx) => {
    let user = await User.findOne({
        where: {
            id: ctx.params.id
        },
        attributes: {
            exclude: ["createdAt"]
        }
    });
    ctx.body = user;
})

router.del("/user/:id", async (ctx) => {
    const user = await User.findOne({ where: { id: ctx.params.id } });
    if (user === null) {
        return ctx.body = "User does not exist";
    }
    await user.destroy();
    return ctx.body = "Success";
});

export default router.routes();