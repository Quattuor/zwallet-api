const db = require("../config/database");

module.exports = {
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const q = `SELECT * FROM users WHERE email='${email}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  postUser: (body) => {
    return new Promise((resolve, reject) => {
      const q = `INSERT INTO users SET ? `;
      db.query(q, body, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  getOtp: (otp) => {
    return new Promise((resolve, reject) => {
      // const q = `SELECT * FROM otps WHERE kode='${otp}'`;
      const q = `SELECT * FROM otps AS o JOIN users AS u ON u.email=o.email WHERE o.kode='${otp}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  insertOtp: (body) => {
    return new Promise((resolve, reject) => {
      const q = `INSERT INTO otps SET ? `;
      db.query(q, body, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  deleteOtp: (otp) => {
    return new Promise((resolve, reject) => {
      const q = `DELETE FROM otps WHERE kode='${otp}' `;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  updateVerified: (email) => {
    return new Promise((resolve, reject) => {
      const q = `UPDATE users SET is_verified=1 WHERE email='${email}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  updateUserPin: (id, pin) => {
    return new Promise((resolve, reject) => {
      const q = `UPDATE users SET pin='${pin}' WHERE id='${id}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  insertToken: (token) => {
    return new Promise((resolve, reject) => {
      const q = `INSERT INTO token_whitelist SET ? `;
      db.query(q, { token }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  getUserByPin: (pin) => {
    return new Promise((resolve, reject) => {
      const q = `SELECT * FROM users WHERE pin='${pin}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  updatePin: (id, pin) => {
    return new Promise((resolve, reject) => {
      const q = `UPDATE users SET pin=${pin} WHERE id_user='${id}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  deleteToken: (token) => {
    return new Promise((resolve, reject) => {
      const q = `DELETE FROM token_whitelist WHERE token='${token}' `;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  updatePassword: (email, pass) => {
    return new Promise((resolve, reject) => {
      const q = `UPDATE users SET password='${pass}' WHERE email='${email}'`;
      db.query(q, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
};
