const nodemailer = require("nodemailer");
const sendMail = (email, subject, message) => {
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
        subject: subject,
        html: message,
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