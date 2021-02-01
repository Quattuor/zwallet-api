const db = require("../config/database");

module.exports = {
  getUserById: (req) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT id_user, username, email, phone, photo, balance, id_virtual FROM users WHERE id_user = ?";
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
};
