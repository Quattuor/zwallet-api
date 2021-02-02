const app = require('express').Router();

const welcome = require('./welcome');
const history = require('./history');

app.use('/history',history);
app.use('/', welcome);

module.exports = app;