const {
    user
} = require('../database/models');

const registerRepo = async(data_user, hashPassword) => {
    const is_active = "nonactive";
    const password = hashPassword;
    const {
        name,
        email,
        total_score,
        bio,
        city,
        sosial_media_url
    } = data_user;

    return await user.create({
        name,
        email,
        password,
        total_score,
        bio,
        city,
        sosial_media_url,
        is_active
    })
}

const getUserSingleRepo = async({
    user_id,
    emailNew,
    token
}) => {
    const email = emailNew || 0;
    const id = user_id || 9999;
    const password = token || 0;
    console.log(email, id, password)
    if (password === 0) {
        if (email === 0) {
            return await user.findOne({
                where: {
                    id
                }
            })
        }
        if (id === 9999) {
            return await user.findOne({
                where: {
                    email
                }
            })
        }
    } else {
        return await user.findOne({
            where: {
                password
            }
        })
    }
}

const updateRepo = async(id, data_user) => {
    const is_active = "active";
    const {
        name,
        password,
        total_score,
        bio,
        city,
        sosial_media_url,
    } = data_user;
    return await user.update({
            name,
            password,
            total_score,
            bio,
            city,
            sosial_media_url,
            is_active
        }, {
            where: {
                id
            },
            returning: true
        }

    )
}

const repo = {
    registerRepo,
    getUserSingleRepo,
    updateRepo
}

module.exports = repo;