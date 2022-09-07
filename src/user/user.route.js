const express = require("express");
const userRoute = express.Router();
const controller = require("./user.controller");
const {
    authController
} = require("../auth/auth.controller");
userRoute.get("/user", (req, res) => {
    return res.send("pandu");
})
userRoute.post("/user/register", controller.registerController);
userRoute.get("/user/:user_id", controller.getUserSingleController);
userRoute.put("/user/update/:id", controller.updateController);
userRoute.post("/user/confirm", controller.confirmUserController);
userRoute.post("/auth/login", authController);

module.exports = userRoute;