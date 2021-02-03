const db = require("../config/database");

const transferModel = (payload) =>
  new Promise((resolve, reject) => {
    const Qstr = "INSERT INTO HistoryUser SET ?";
    const id = Date.now();
    let sender = "";

    const payloads = {
      id_history: `t-${id}`,
      ...payload,
      type: "Transfer",
      createdAt: new Date(Date.now()),
    };
    db.query(Qstr, payloads, (err) => {
      if (err) {
        reject(err);
      }
      const selectTransfer = `SELECT balance, username FROM users WHERE id_user = ${payload.id_user}`;
      db.query(selectTransfer, (err, data) => {
        if (err) {
          reject(err);
        }
        sender = data[0].username;
        const updateTransfer = `UPDATE users SET ? WHERE id_user = ${payload.id_user}`;
        db.query(
          updateTransfer,
          { balance: data[0].balance - payload.balance },
          (err) => {
            if (err) {
              reject(err);
            }
          }
        );
      });
    });

    const payloads2 = {
      ...payloads,
      id_history: `r-${id}`,
      id_user: payload.id_contact,
      id_contact: payload.id_user,
      type: "Received",
    };
    db.query(Qstr, payloads2, (err) => {
      if (err) {
        reject(err);
      }
      const selectReceived = `SELECT balance FROM users WHERE id_user = ${payload.id_contact}`;
      db.query(selectReceived, (err, data) => {
        if (err) {
          reject(err);
        }
        const updateTransfer = `UPDATE users SET ? WHERE id_user = ${payload.id_contact}`;
        db.query(
          updateTransfer,
          { balance: data[0].balance + payload.balance },
          (err) => {
            if (err) {
              reject(err);
            }
            resolve({ ...payload, sender });
          }
        );
      });
    });
  });

const subscriptionModel = (payload) =>
  new Promise((resolve, reject) => {
    const Qstr = "INSERT INTO HistoryOther SET ?";
    const id = Date.now();

    const payloads = {
      id_history: `sub-${id}`,
      ...payload,
      type: "Subscription",
      createdAt: new Date(Date.now()),
    };
    db.query(Qstr, payloads, (err) => {
      if (err) {
        reject(err);
      }
      const selectTransfer = `SELECT balance FROM users WHERE id_user = ${payload.id_user}`;
      db.query(selectTransfer, (err, data) => {
        if (err) {
          reject(err);
        }
        const updateTransfer = `UPDATE users SET ? WHERE id_user = ${payload.id_user}`;
        db.query(
          updateTransfer,
          { balance: data[0].balance - payload.balance },
          (err) => {
            if (err) {
              reject(err);
            }
          }
        );
      });
    });

    resolve(payload);
  });

const topupModel = (payload) =>
  new Promise((resolve, reject) => {
    const id = Date.now();
    let receiver = "";
    let sender = "";

    const selectTransfer = `SELECT u.id_user, u.balance, i.name 
  FROM users AS u 
  JOIN Instance AS i 
  WHERE u.id_virtual LIKE '%${payload.id_virtual}%' AND i.id_instance LIKE '%${payload.id_instance}%'`;
    db.query(selectTransfer, (err, data) => {
      if (err) {
        reject(err);
      }
      receiver = data[0].id_user;
      sender = data[0].name;

      const Qstr = "INSERT INTO HistoryOther SET ?";
      const payloads = {
        id_history: `top-${id}`,
        id_user: data[0].id_user,
        id_instance: payload.id_instance,
        balance: payload.balance,
        type: "Top up",
        createdAt: new Date(Date.now()),
      };
      db.query(Qstr, payloads, (err) => {
        if (err) {
          reject(err);
        }
      });

      const updateTransfer = `UPDATE users SET ? WHERE id_user = ${data[0].id_user}`;
      db.query(
        updateTransfer,
        { balance: data[0].balance + payload.balance },
        (err) => {
          if (err) {
            reject(err);
          }
          resolve({ ...payload, receiver: receiver, sender: sender });
        }
      );
    });
  });

const getInstanceByUser = (id, from, end) =>
  new Promise((resolve, reject) => {
    let q = `SELECT hi.id_history, hi.balance, hi.type, hi.createdAt, i.name, i.image FROM HistoryOther AS hi JOIN Instance AS i ON hi.id_instance = i.id_instance WHERE hi.id_user = '${id}'`;
    if (from && end) {
      q += ` AND hi.createdAt BETWEEN ${from} AND ${end}`;
    } else if (from) {
      q += ` AND hi.createdAt = '${from}'`;
    }
    db.query(q, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

const getTransactionByUser = (id, from, end) =>
  new Promise((resolve, reject) => {
    const q = `SELECT hi.id_history, hi.balance, hi.type, hi.createdAt, i.username AS first_name, i.lastname AS last_name, i.photo AS image FROM HistoryUser AS hi JOIN users AS i ON hi.id_contact = i.id_user WHERE hi.id_user = '${id}'`;
    db.query(q, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

module.exports = {
  transferModel,
  subscriptionModel,
  topupModel,
  getInstanceByUser,
  getTransactionByUser,
};
