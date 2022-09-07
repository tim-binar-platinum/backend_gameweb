const {
    user
} = require("../database/models");

const authRepo = async(email) => {
    return await user.findOne({
        where: {
            email
        }
    })
}

module.exports = {
    authRepo
};