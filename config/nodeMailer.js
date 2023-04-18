import nodemailer from "nodemailer";

const mailer = (mail,subject, text, attachments) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "octavedev01@gmail.com",
      pass: "ayxfjwisbgqaehlb",
    },
  });


  const mailOptions = {
    from: "octavedev01@gmail.com",
    to: mail,
    subject: subject,
    text: text,
    attachments: attachments
  };

  transporter
    .sendMail(mailOptions)
    .then(
      () => console.log("mail sent successfully"),
      )
    .catch((error) => console.log(error));
};

export default mailer;