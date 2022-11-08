// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  res.status(200).json({ status: "Ok" });
}
const body = JSON.parse(req.body);
console.log("body", body);
const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Message: ${body.message}
`;
mail
  .send({
    to: "to.name@email.com",
    from: "from.name@email.com",
    subject: "New Message!",
    text: message,
    html: message.replace(/rn/g, "<br>"),
  })
  .then(() => {
    res.status(200).json({ status: "Ok" });
  });
