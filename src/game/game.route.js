const express = require("express");
const gameRoute = express.Router();
const controller = require("./game.controller");

gameRoute.post("/game/add", controller.addGameController);
gameRoute.put("/game/update/:id", controller.updateGame);
gameRoute.get("/game", controller.listGame);

module.exports = gameRoute;