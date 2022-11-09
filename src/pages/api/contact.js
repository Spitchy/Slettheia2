// require("dotenv").config();

import { json } from "express";

export default function (req, res) {
  // require('dotenv').config()
  let nodemailer = require("nodemailer");
  // console.log("MAIL:", process.env.NEXT_PUBLIC_FROM_EMAIL);
  const transporter = nodemailer.createTransport({
    port: 465,
    // host: process.env.FROM_HOST,
    host: "mail.rosario.no",
    auth: {
      user: "noreply@rosario.no",
      pass: "6A(a^lsRJmwK",
    },
    secure: true,
  });
  console.log(req.body);
  const mailData = {
    from: "noreply@rosario.no",
    to: "madscrosario@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(200).send("Feil" + JSON.stringify(err));
    } else {
      console.log(info);
      res.status(200).send("Bra");
    }
  });

  // console.log(req.body);
}
