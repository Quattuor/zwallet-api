const authModel = require("../model/auth");
const form = require("../helper/form");
const nodemailer = require("nodemailer");
const otp = require("../helper/otp");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
  loginUser: (req, res) => {
    const { email, password } = req.body;

    authModel
      .getUserByEmail(email)
      .then((data) => {
        if (!data.length) {
          return form.error(
            res,
            "Email or password is not match",
            "bcyript",
            401
          );
        }
        bcrypt.compare(password, data[0].password, (err, result) => {
          if (err) {
            form.error(res, err, "bcyript", 401);
          }
          if (!result) {
            form.error(res, "Email or password is not match", "password", 401);
          } else {
            const payload = {
              username: data[0].username,
              email: data[0].email,
            };
            const secret = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secret, {
              expiresIn: "10h",
            });

            authModel
              .insertToken(token)
              .then(() => {
                form.success(res, "success login", { ...payload, token }, 200);
              })
              .catch(() => {
                form.error(res, "insert token", "error", 404);
              });
          }
        });
      })
      .catch((e) => {
        form.error(res, "Error get", e, 401);
      });
  },
  registerUser: (req, res) => {
    const { body } = req;

    authModel
      .getUserByEmail(body.email)
      .then((data) => {
        // if (data.length) {
        //   form.error(res, "email has been registered", "email", 200);
        // } else {
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
          if (err) {
            form.error(res, err, "bycript", 401);
          }
          bcrypt.hash(body.password, salt, (err, hashedPassword) => {
            if (err) {
              form.error(res, err, "bycript", 401);
            }
            const newBody = {
              ...body,
              password: hashedPassword,
            };

            authModel
              .postUser(newBody)
              .then(() => {
                const newOtp = otp.generate(6);
                const bodyOtp = {
                  email: body.email,
                  kode: newOtp,
                };

                authModel
                  .insertOtp(bodyOtp)
                  .then((_) => {
                    sendEmail(body.email, res, newOtp);

                    form.success(res, "success post", "new user", 200);
                  })
                  .catch((e) => {
                    form.error(res, e, "Error", 404);
                  });
              })
              .catch((e) => {
                form.error(res, e, "Error", 200);
              });
          });
        });
        // }
      })
      .catch((e) => {
        form.error(res, e, "Error", 200);
      });
  },
  postOtp: (req, res) => {
    const { otp } = req.body;

    console.log(otp);
    authModel
      .getOtp(otp)
      .then((data) => {
        if (!data.length) {
          form.error(res, "Otp not found", "Otp", 401);
        } else {
          authModel
            .updateVerified(data[0].email)
            .then(() => {
              authModel.deleteOtp(otp).then(() => {
                form.success(res, "success update", "otp", 200);
              });
            })
            .catch((e) => {
              form.error(res, e, "Error", 200);
            });
        }
      })
      .catch((e) => {
        form.error(res, e, "Error", 200);
      });
  },
};
