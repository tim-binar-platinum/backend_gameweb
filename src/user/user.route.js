const express = require("express");
const userRoute = express.Router();
const controller = require("./user.controller");
const {
    authController
} = require("../auth/auth.controller");
const tokenVerification = require("../middleware/tokenVerification");


userRoute.get("/user", (req, res) => {
    return res.send("pandu");
})
userRoute.post("/user/register", controller.registerController);
userRoute.get("/user/:user_id", controller.getUserSingleController);
userRoute.put("/user/update", tokenVerification, controller.updateController);
userRoute.put("/user/confirm", controller.confirmUserController);
userRoute.post("/user/forget", controller.forgetRequstController);
userRoute.put("/user/reset", controller.forgetPasswordController);
userRoute.put("/user/score", tokenVerification, controller.updateScoreController);
userRoute.post("/auth/login", authController);

module.exports = userRoute;