const {
    query
} = require("express");
const service = require("./user.service");

const registerController = async(req, res) => {

    const data_user = req.body;
    const register_data = await service.registerService(data_user);
    if (register_data) {
        return res.status(200).json(register_data);
    }
    return res.status(400).send("email sudah terdaftar");

}

const getUserSingleController = async(req, res) => {

    const {
        user_id
    } = req.params;
    const user_data = await service.getUserSingleService(user_id);
    if (user_data) {
        return res.status(200).json(user_data);
    }
    return res.status(404).send("tidak ada user");

}

const updateController = async(req, res) => {
    const {
        id
    } = req.params;
    const data_user = req.body;
    const update_data = await service.updateService(id, data_user);
    return res.status(200).json(update_data);
}

const confirmUserController = async(req, res) => {
    const {
        token
    } = req.query;
    const data = await service.registerConfirmService(token);
    return res.json(data);
}
const controller = {
    registerController,
    getUserSingleController,
    updateController,
    confirmUserController
}

module.exports = controller;