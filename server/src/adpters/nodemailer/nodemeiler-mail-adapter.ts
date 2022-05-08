import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "25549a0e70ca75",
      pass: "fa7c282824abec"
    }
  });


export  class NodemailerMailAdapter implements MailAdapter {

  async  sendMail({subject, body}: SendMailData) {
        await  transport.sendMail({
        from: 'Equipe Feadget <oi@feadget.com',
        to: 'Edmundo roberto <edmundomarinho50@hotmail.com>',
        subject, 
        html: body,
    }); 
  }
}
