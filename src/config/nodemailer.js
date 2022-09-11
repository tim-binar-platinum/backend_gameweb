const nodemailer = require("nodemailer");
const sendMail = (email) => {
    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "penakmaju99@gmail.com",
            pass: "zsuqmzsmfjglejjl"
        }
    });

    let mailerOptions;
    let sender = "pandu";
    mailerOptions = {
        from: sender,
        to: email,
        subject: "testing",
        html: "<p> ytetetetet <a href=https://yyyy.com>ayo</a></p>",
    };

    transport.sendMail(mailerOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log(response);
        }
    })
}

module.exports = sendMail;