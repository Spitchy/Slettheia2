import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "madscrosario+sendgrid@gmail.com", // Your email where you'll receive emails
      from: "madscrosario@gmail.com", // your website email address here
      subject: `[Kontaktskjema]: ${req.body.company}`,
      html: `<div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Du har fått en ny epost fra ${req.body.name}, fra firmaet/organisasjonen: ${req.body.company} (${req.body.orgnr})</h3>
              Epost: ${req.body.email}
              Telefon: ${req.body.phone}
              <div style="font-size: 16px;">
              <p>Melding:</p>
              <p>${req.body.message}</p>
              <br>
              <p> Denne eposten ble sendt fra nettsiden www.slettheiaskole.no </p>
              </div>
        </div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
