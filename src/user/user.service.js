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
    const password = data_user.password;
    const hashPassword = await bcrypt.hash(password, 10);
    return await repo.updateRepo({
        id,
        data_user,
        hashPassword
    });
}
const registerConfirmService = async(token) => {
    const data_user = await repo.getUserSingleRepo({
        token
    });
    if (data_user) {
        const id = data_user.id;
        return await repo.updateRepo({
            id,
            data_user
        });
    }
    return {
        msg: "token salah"
    };
}
const forgetPasswordService = async({
    token,
    forgetToken
}) => {
    const data = await repo.getUserSingleRepo({
        token
    });

    const password = forgetToken;
    const id = data.id;
    const newPassword = await bcrypt.hash(password, 10);
    return await repo.updateRepo({
        id,
        newPassword
    });
}

const updateScoreService = async({
    id,
    score
}) => {
    user_id = id;
    const data_user = await repo.getUserSingleRepo({
        user_id
    });

    const newScore = data_user.total_score + score;
    return await repo.updateRepo({
        id,
        newScore
    });
}
const service = {
    registerService,
    getUserSingleService,
    updateService,
    registerConfirmService,
    forgetPasswordService,
    updateScoreService
}
module.exports = service;