const {transferModel, subscriptionModel, topupModel} = require('../model/history');
const {io} = require('../helper/socket');
const form = require('../helper/form');

const Transfer = (req, res) => {
  transferModel(req.body).then((data) => {
    form.success(res,'here a payload', data, 201)
    try {
      io.to(data.id_contact).emit("transaction", { title: `New Income from ${data.sender}`, message: `Received ${data.balance}` });
    } catch (err) {
      console.log(err);
    }
  }).catch((err) => {
    form.error(res, 'bad request', err, 400)
  })
}

const Subscription = (req, res) => {
  subscriptionModel(req.body).then((data) => {
    form.success(res,'here a payload', data, 201)
  }).catch((err) => {
    form.error(res, 'bad request', err, 400)
  })
}

const Topup  = (req, res) => {
  topupModel(req.body).then((data) => {
    form.success(res,'here a payload', data, 201)
    try {
      io.to(data.receiver).emit("topup", { title: `Top up Success`, message: `Received ${data.balance}` });
    } catch (err) {
      console.log(err);
    }
  }).catch((err) => {
    form.error(res, 'bad request', err, 400)
  })
}

module.exports = {
  Transfer,
  Subscription,
  Topup
}
