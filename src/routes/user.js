const userRouter = require("express").Router();

const userController = require("../controller/user");
const uploadImg = require("../middlewares/upload");
const verif = require("../middlewares/verif");

userRouter.get("/:id", userController.getUserById);
userRouter.get("/phone/:phone", userController.getUserPhone);
userRouter.patch("/:id", verif.phoneUsed, userController.updateUser);
userRouter.patch("/pw/new", verif.isLogin, userController.updatePass);
userRouter.patch("/img/:id", uploadImg.singleUpload, userController.updateUser);
userRouter.patch("/PIN/new", verif.isLogin, userController.SetPIN);
userRouter.get("/PIN/:PIN", verif.isLogin, userController.CheckPIN);

module.exports = userRouter;
