const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Environment variables
const EMAIL_USER = process.env.EMAIL_USER || "sakshibhavsar2018@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "Sam@1904";

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verify email configuration
contactEmail.verify((error) => {
  if (error) {
    console.error('Error verifying email configuration:', error);
  } else {
    console.log("Ready to Send");
  }
});

// Route for handling contact form submission
app.post("/contact", (req, res) => {
  console.log('Received contact form submission:', req.body);

  const { firstName, lastName, email, message, phone } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
    console.error('Validation failed:', { firstName, lastName, email, message });
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: "sakshibhavsar2018@gmail.com", // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    } else {
      console.log('Email sent successfully');
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
