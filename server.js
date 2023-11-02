const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.HOTMAIL_USER,
    pass: process.env.HOTMAIL_PASS,
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email transport:", error);
  } else {
    console.log("Email transport ready to send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields" });
  }

  const mail = {
    from: name,
    to: "godinez.alfredo@hotmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});