const db = require("../config/database");
const bcrypt = require("bcrypt");

module.exports = {
  getUserById: (req) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT id_user, username, email, pin, phone, photo, balance, id_virtual FROM users WHERE id_user = ?";
      db.query(qs, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  getUserPhone: (req) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT id_user, username, email, phone, photo FROM users WHERE phone = ?";
      db.query(qs, req, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updateUser: (id, updateBody) => {
    return new Promise((resolve, reject) => {
      const qs = "UPDATE users SET ? WHERE id_user = ?";
      db.query(qs, [id, updateBody], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  updatePass: (body, email) => {
    return new Promise((resolve, reject) => {
      const { oldpass, newpass } = body;
      const queryStr = `SELECT password FROM users WHERE email = ?`;
      db.query(queryStr, email, (err, data) => {
        if (!err) {
          if (data.length > 0) {
            bcrypt.compare(oldpass, data[0].password, (error, result) => {
              if (error) {
                reject(error);
              }
              if (!result) {
                reject("Wrong Password");
              } else {
                const saltRounds = Math.floor(Math.random() * 10) + 1;
                bcrypt.hash(
                  newpass,
                  saltRounds,
                  (errorHash, hashedPassword) => {
                    if (errorHash) {
                      reject(errorHash);
                    } else {
                      const updatePassword = `UPDATE users SET password = ? WHERE email = ?`;
                      db.query(
                        updatePassword,
                        [hashedPassword, email],
                        (errorUpdate) => {
                          if (!errorUpdate) {
                            resolve("Success");
                          } else {
                            reject(errorUpdate);
                          }
                        }
                      );
                    }
                  }
                );
              }
            });
          } else {
            reject("User Not Found");
          }
        } else {
          reject(err);
        }
      });
    });
  },

  SetPIN: (email, PIN) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET pin = ? WHERE email = ?`;
      db.query(queryStr, [PIN, email], (err, data) => {
        if (!err) {
          resolve("SET PIN berhasil");
        } else {
          reject("Error");
        }
      });
    });
  },

  CheckPIN: (email, PIN) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT * FROM users WHERE email = ? AND pin = ?`;
      db.query(queryStr, [email, PIN], (err, data) => {
        if (!err) {
          if (data.length > 0) {
            resolve("PIN benar");
          } else {
            reject("PIN salah");
          }
        } else {
          reject("Error");
        }
      });
    });
  },
};
