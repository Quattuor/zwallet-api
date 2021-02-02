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
  getUseByPin: (pin) => {
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
      const q = `SELECT * FROM otps WHERE code='${otp}'`;
      db.query(q, body, (err, data) => {
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
  deleteOtp: (email) => {
    return new Promise((resolve, reject) => {
      const q = `DELETE FROM otp WHERE email='${email}' `;
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
      const q = `UPDATE users SET verified=1 WHERE email='${email}'`;
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
};
