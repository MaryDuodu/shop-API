const {Router} = require("express");
const {login, register} = require("../contollers/auth.controller");

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;