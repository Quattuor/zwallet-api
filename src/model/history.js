const db = require('../config/database');

const transferModel = (payload) =>  new Promise((resolve, reject) => {
  const Qstr = 'INSERT INTO HistoryUser SET ?'
  const id = Date.now()

  const payloads = {
    id_history : `t-${id}`,
    ...payload,
    type: 'Transfer',
    createdAt: new Date(Date.now()),
  }
  db.query(Qstr, payloads, (err) => {
    if (err) {
      reject(err)
    }
    const selectTransfer = `SELECT balance FROM users WHERE id_user = ${payload.id_user}`
    db.query(selectTransfer, (err,data) => {
      if (err) {
        reject(err)
      }
      const updateTransfer = `UPDATE users SET ? WHERE id_user = ${payload.id_user}`
      db.query(updateTransfer, {balance: data[0].balance - payload.balance}, (err) => {
        if (err) {
          reject(err)
        }
      })
    })
  })

  const payloads2 = {
    ...payloads,
    id_history : `r-${id}`,
    id_user : payload.id_contact,
    id_contact: payload.id_user,
    type: 'Received'
  }
  db.query(Qstr, payloads2, (err) => {
    if (err) {
      reject(err)
    }
    const selectReceived = `SELECT balance FROM users WHERE id_user = ${payload.id_contact}`
    db.query(selectReceived, (err,data) => {
      if (err) {
        reject(err)
      }
      const updateTransfer = `UPDATE users SET ? WHERE id_user = ${payload.id_contact}`
      db.query(updateTransfer, {balance: data[0].balance + payload.balance}, (err) => {
        if (err) {
          reject(err)
        }
      })
    })
  })
  resolve(payload)

})

const subscriptionModel = (payload) =>  new Promise((resolve, reject) => {
  const Qstr = 'INSERT INTO HistoryOther SET ?'
  const id = Date.now()

  const payloads = {
    id_history : `sub-${id}`,
    ...payload,
    type: 'Subscription',
    createdAt: new Date(Date.now()),
  }
  db.query(Qstr, payloads, (err) => {
    if (err) {
      reject(err)
    }
    const selectTransfer = `SELECT balance FROM users WHERE id_user = ${payload.id_user}`
    db.query(selectTransfer, (err,data) => {
      if (err) {
        reject(err)
      }
      const updateTransfer = `UPDATE users SET ? WHERE id_user = ${payload.id_user}`
      db.query(updateTransfer, {balance: data[0].balance - payload.balance}, (err) => {
        if (err) {
          reject(err)
        }
      })
    })
  })

  resolve(payload)

})

const topupModel = (payload) =>  new Promise((resolve, reject) => {
  const id = Date.now() 

  const selectTransfer = `SELECT id_user, balance FROM users WHERE id_virtual LIKE '%${payload.id_virtual}%'`
  db.query(selectTransfer, (err,data) => {
    if (err) {
      reject(err)
    }

    const Qstr = 'INSERT INTO HistoryOther SET ?'
    const payloads = {
      id_history : `top-${id}`,
      id_user : data[0].id_user,
      id_instance : payload.id_instance,
      balance : payload.balance,
      type: 'Top up',
      createdAt: new Date(Date.now()),
    }
    db.query(Qstr, payloads, (err) => {
      if (err) {
        reject(err)
      }
    })

    const updateTransfer = `UPDATE users SET ? WHERE id_user = ${data[0].id_user}`
    db.query(updateTransfer, {balance: data[0].balance + payload.balance}, (err) => {
      if (err) {
        reject(err)
      }
    })

  })  

  resolve(payload)

})

module.exports = {
  transferModel,
  subscriptionModel,
  topupModel
}