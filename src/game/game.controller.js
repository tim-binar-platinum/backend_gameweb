const service = require("./game.service");

const listGame = async(req, res) => {
    const data_game = await service.listGameService();
    if (data_game) {
        return res.status(200).json(data_game)
    }
    return res.status(404).send("tidak ada game");
}
const addGameController = async(req, res) => {
    const data_game = req.body;
    const addGame = await service.addGameService(data_game);
    if (addGame) {
        return res.status(200).json(addGame);
    }
    return res.status(400).send("ada kesalahan");
}

const updateGame = async(req, res) => {
    const data_game = req.body;
    const {
        id
    } = req.params;
    const addGame = await service.updateGameService(id, data_game);
    if (addGame) {
        return res.status(200).json(addGame);
    }
    return res.status(400).send("update gagal");
}
const controller = {
    addGameController,
    listGame,
    updateGame
}

module.exports = controller;