const db = require('../config/database');

const getAll = (payload) => new Promise((resolve, reject) => {
  const qs =
    `SELECT u.id_user, u.username, u.phone, u.photo 
    FROM contact AS c
    JOIN users AS u
    ON u.id_user = c.id_contact
    WHERE c.id_user = ${payload}`;
  db.query(qs, (err, data) => {
    if (!err) {
      resolve(data);
    } else {
      reject(err);
    }
  });
});

const newContact = (payload) => new Promise((resolve, reject) => {
  const qs = "INSERT INTO contact SET ?"; 
  db.query(qs, payload,(err) => {
    if (!err) {
      resolve(payload);
    } else {
      reject(err);
    }
  });
});

module.exports = {
  getAll, 
  newContact
}
