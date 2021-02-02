const authRouter = require("express").Router();

const authController = require("../controller/auth");

authRouter.post("/signup", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.delete("/logout", authController.logoutUser);
authRouter.post("/pin", authController.postPin);
authRouter.post("/otp", authController.postOtp);
authRouter.get("/account/v/:otp", authController.verifyOtp);
authRouter.post("/reset_pass", authController.registerUser);

module.exports = authRouter;
