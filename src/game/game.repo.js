const {
    game
} = require("../database/models");

const listGameRepo = async() => {
    return await game.findAll();
}

const addGameRepo = async(data_game) => {
    const {
        name,
        description,
        thumbnail,
        game_url,
        play_count
    } = data_game;
    return await game.create({
        name,
        description,
        thumbnail,
        game_url,
        play_count
    })
}

const updateGameRepo = async(id, data_game) => {
    const {
        name,
        description,
        thumbnail,
        game_url,
        play_count
    } = data_game;
    return await game.update({
        name,
        description,
        thumbnail,
        game_url,
        play_count
    }, {
        where: {
            id
        },
        returning: true
    })
}

const repo = {
    addGameRepo,
    updateGameRepo,
    listGameRepo
}

module.exports = repo;