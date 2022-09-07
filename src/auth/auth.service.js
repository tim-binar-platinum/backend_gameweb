const {
    authRepo
} = require("./auth.repo");

const authService = async(email) => {
    return await authRepo(email);
}

module.exports = {
    authService
};