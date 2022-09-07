const repo = require("./game.repo");

const listGameService = async() => {
    return await repo.listGameRepo();
}

const addGameService = async(data_game) => {
    return await repo.addGameRepo(data_game);
}

const updateGameService = async(id, data_game) => {
    return await repo.updateGameRepo(id, data_game);
}

const service = {
    addGameService,
    listGameService,
    updateGameService
}

module.exports = service;