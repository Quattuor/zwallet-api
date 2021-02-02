const authRouter = require("express").Router();

const authController = require("../controller/auth");

authRouter.post("/signup", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.post("/pin", authController.registerUser);
authRouter.post("/otp", authController.registerUser);
authRouter.post("/reset_pass", authController.registerUser);

module.exports = authRouter;
