const bcrypt = require("bcrypt")
const repo = require('./user.repo');

const registerService = async(data_user) => {
    const password = data_user.password;
    const hashPassword = await bcrypt.hash(password, 10);
    const emailNew = data_user.email;
    const data = await repo.getUserSingleRepo({
        emailNew
    });

    if (data) {
        return null;
    }
    return await repo.registerRepo(data_user, hashPassword);
}

const getUserSingleService = async(user_id) => {
    return await repo.getUserSingleRepo({
        user_id
    });
}
const updateService = async(id, data_user) => {
    return await repo.updateRepo(id, data_user);
}
const registerConfirmService = async(token) => {
    const data_user = await repo.getUserSingleRepo({
        token
    });
    const confirm = "active";
    const id = data_user.id;
    return await repo.updateRepo(id, data_user, confirm);
}
const service = {
    registerService,
    getUserSingleService,
    updateService,
    registerConfirmService
}
module.exports = service;