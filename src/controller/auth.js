const authModel = require("../model/auth");
const form = require("../helper/form");
const nodemailer = require("nodemailer");
const otp = require("../helper/otp");
const auth = require("../model/auth");

const sendEmail = (email, res, otp) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "elwanditirtana1945a@gmail.com",
      pass: "ETDldTS123",
    },
  });

  const mailOptions = {
    from: "Admin Blanja",
    to: email,
    subject: "Code OTP",
    html: "<p>Your code OTP is <b>" + otp + "</b></p>",
  };

  transporter.sendMail(mailOptions, function (error, _) {
    if (error) {
      return form.error(res, error, "Error Nodemailer", 404);
    }
  });
};

module.exports = {
  loginUser: (req, res) => {},
  registerUser: (req, res) => {
    const { email } = req.body;

    authModel
      .getAllUser()
      .then((data) => {
        res.json({ data });
      })
      .catch((e) => {
        res.json({ e });
      });
    // authModel
    //   .getUserByEmail(email)
    //   .then((data) => {
    //     if (data.length) {
    //       form.error(res, "email has been registered", "email", 404);
    //     } else {
    //       authModel
    //         .postUser(req.body)
    //         .then((user) => {
    //           const newOtp = otp.generate(6);
    //           const bodyOtp = {
    //             email,
    //             code: newOtp,
    //           };
    //           authModel
    //             .insertOtp(bodyOtp)
    //             .then((_) => {
    //               sendEmail(email, res, newOtp);

    //               form.success(res, "success", user, 200);
    //             })
    //             .catch((e) => {
    //               form.error(res, e, "Error", 404);
    //             });
    //         })
    //         .catch((e) => {
    //           form.error(res, e, "Error", 404);
    //         });
    //     }
    //   })
    //   .catch((e) => {
    //     // form.error(res, e, "Error", 401);
    //     form.error(res, e, "Error", 404);
    //   });
  },
  postPin: (req, res) => {},
};
