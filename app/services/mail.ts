import * as nodemailer from "nodemailer";
import config from '../configs/config';

class Mail {

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string) { }

    sendMail() {
        let mailOptions = {
            from: "leminhtuan12b1@gmail.com",
            to: this.to,
            subject: this.subject,
            html: this.message
        };

        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: false,
            auth: {
                user: 'leminhtuan12b1@gmail.com',
                pass: 'leminhtuan123456'
            },
            tls: { rejectUnauthorized: false }
        });

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error;
            } else {
                return "E-mail enviado com sucesso!";
            }
        });
    }


}

export default new Mail;