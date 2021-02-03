const jwt = require("jsonwebtoken");
const db = require("../config/database");
const form = require("../helper/form");

module.exports = {
  isRegistered: (req, res, next) => {
    const { email } = req.body;
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM users WHERE email = ?";
      db.query(qs, email, (err, data) => {
        if (!err) {
          if (!data[0]) {
            resolve("Success");
          } else {
            reject("Email already in use!");
          }
        } else {
          reject("Empty Field");
        }
      });
    })
      .then(() => {
        next();
      })
      .catch((err) => {
        form.error(res, "Encountered error", err, 400);
      });
  },

  isLogin: (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      form.error(res, "Please Login First", "err", 401);
    } else {
      const token = bearerToken.split(" ")[1];
      return new Promise((resolve, reject) => {
        const qs = "SELECT token FROM blacklist WHERE token = ?";
        db.query(qs, token, (err, data) => {
          if (!err) {
            if (!data[0]) {
              resolve(token);
            } else {
              reject("You Already Logout");
            }
          } else {
            reject("Check Token Error");
          }
        });
      })
        .then((result) => {
          try {
            decodedToken = jwt.verify(result, process.env.SECRET_KEY);
            req.decodedToken = decodedToken;
            next();
          } catch (err) {
            form.error(res, "Invalid Token", err, 401);
          }
        })
        .catch((err) => {
          form.error(res, "Error occurred", err, 401);
        });
    }
  },

  isPIN: (req, res, next) => {
    const email = req.decodedToken.email;
    const PIN = req.header("x-access-PIN");
    if (!PIN) {
      res.status(401).json({
        status: 401,
        message: `invalid PIN`,
      });
    } else {
      return new Promise((resolve, reject) => {
        const queryStr = `SELECT * FROM users WHERE email = ? AND pin = ?`;
        db.query(queryStr, [email, PIN], (err, data) => {
          if (!err) {
            if (data.length > 0) {
              resolve({
                status: 200,
              });
            } else {
              reject({
                status: 404,
                message: `PIN tidak teridentifikasi`,
              });
            }
          } else {
            reject({
              status: 500,
              message: err,
            });
          }
        });
      })
        .then((result) => {
          next();
        })
        .catch((error) => {
          res.status(error.status).json(error);
        });
    }
  },

  phoneUsed: (req, res, next) => {
    const { phone } = req.body;
    if (phone != undefined) {
      return new Promise((resolve, reject) => {
        const queryStr = `SELECT phone FROM users WHERE phone = ?`;
        db.query(queryStr, phone, (err, data) => {
          if (!err) {
            if (data.length > 0) {
              reject({
                status: 401,
                message: `No. HP sudah digunakan`,
              });
            } else {
              resolve({
                status: 200,
              });
            }
          } else {
            reject({
              status: 500,
              message: `INTERNAL SERVER ERROR`,
              details: err,
            });
          }
        });
      })
        .then((result) => {
          next();
        })
        .catch((error) => {
          res.status(error.status).json(error);
        });
    } else {
      next();
    }
  },
};
