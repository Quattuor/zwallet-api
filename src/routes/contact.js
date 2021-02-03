const app = require('express').Router();

const {getallByUser, addContact} = require('../controller/contact');

app.post('/', addContact);
app.get('/:idUser', getallByUser);


module.exports = app;