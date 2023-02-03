const nodemailer = require("nodemailer");
const {
  SMTP_HOST,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_USER,
  API_URL,
  CLIENT_URL
} = require("../config/config");

class MailService {
  constructor() {
    this.tranporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.tranporter.sendMail({
      from: SMTP_USER,
      to,
      subject: "Activation" + API_URL,
      text: "",
      html: `
                   <div>
                        <h1>Go to link</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `,
    });
  }

  async forgotPasswordSendMail(to, linkin) {
    await this.tranporter.sendMail({
      from: SMTP_USER,
      to,
      subject: "forgot password" + CLIENT_URL,
      text:'',
      html:
            `
            <div>
                 <h1>Go to link</h1>
                 <a href=${linkin}><button >Push me</button></a>
             </div>
            `,
    });
  }
}

module.exports = new MailService();
