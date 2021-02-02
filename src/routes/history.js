const app = require('express').Router();

const {Transfer, Subscription, Topup} = require('../controller/history');

app.post('/transfer', Transfer);
app.post('/subscription', Subscription);
app.post('/topup', Topup);


module.exports = app;