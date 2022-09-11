const {
    query
} = require("express");
const sendMail = require("../config/nodemailer");
const service = require("./user.service");

const registerController = async(req, res) => {

    const data_user = req.body;
    const register_data = await service.registerService(data_user);
    if (register_data) {
        sendMail(data_user.email);
        return res.status(200).json(register_data);

    }
    return res.status(400).json({
        msg: "email sudah terdaftar"
    });

}

const getUserSingleController = async(req, res) => {
    const {
        user_id
    } = req.params;
    const user_data = await service.getUserSingleService(user_id);
    if (user_data) {
        return res.status(200).json(user_data);
    }
    return res.status(404).json({
        msg: "tidak ada user"
    });

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
const forgetPasswordController = async(req, res) => {
    const {
        forgetToken
    } = req.body;
    const {
        id
    } = req.params;

    const data = await service.forgetPasswordService({
        id,
        forgetToken
    });
    return res.json(data);
}

const updateScoreController = async(req, res) => {
    const {
        score
    } = req.body;
    const {
        id
    } = req.params;

    const data = await service.updateScoreService({
        id,
        score
    });
    return res.json(data);
}
const controller = {
    registerController,
    getUserSingleController,
    updateController,
    confirmUserController,
    forgetPasswordController,
    updateScoreController
}

module.exports = controller;