const app = require('express').Router();

const welcome = require('./welcome');

app.use('/', welcome);

module.exports = app;