import nodemailer from "nodemailer";

const mailer = (mail,subject, text, attachments) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "3Timpex@gmail.com",
      pass: "jemzoqkcmcagnwsq",
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


// user: "octavedev01@gmail.com",
// pass: "ayxfjwisbgqaehlb",