const {transferModel, subscriptionModel, topupModel} = require('../model/history');
const form = require('../helper/form');

const Transfer = (req, res) => {
  transferModel(req.body).then((data) => {
    form.success(res,'here a payload', data, 201)
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
  }).catch((err) => {
    form.error(res, 'bad request', err, 400)
  })
}

module.exports = {
  Transfer,
  Subscription,
  Topup
}
