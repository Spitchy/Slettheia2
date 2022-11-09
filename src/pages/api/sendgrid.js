import sendgrid from "@sendgrid/mail";
//const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid
      .send({
        to: "madscrosario+sendgrid@gmail.com", // Your email where you'll receive emails
        from: "madscrosario@gmail.com", // your website email address here
        subject: `[Kontaktskjema]: ${req.body.company}`,
        text: `testmail ${req.body.message}, ${req.body.name} `,
        html: "<strong>test</strong>",
        /*
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="no">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          <link rel="stylesheet" href="css/styles.css?v=1.0">

        </head>
        <body>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>Du har fått en ny epost fra ${req.body.name}, fra firmaet/organisasjonen: ${req.body.company} (${req.body.orgnr})</h3>
            Epost: ${req.body.email}
            Telefon: ${req.body.phone}
              <div style="font-size: 16px;">
              <p>Melding:</p>
              <p>${req.body.message}</p>
              <br>
              <p> Denne eposten ble sendt fra nettsiden www.slettheiaskole.no </p>
              </div>
        </div>
        </body>
      <html>`,
  */
      })
      .then(() => {
        console.log("Email sent");
      });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
