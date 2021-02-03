const {getAll, newContact} = require('../model/contact');
const form = require('../helper/form');

const getallByUser = (req, res) => {
  getAll(req.params.idUser).then((data) => {
    if (data.length) {
      form.success(res, "Success", data, 200);
    } else {
      form.error(res, "Data not Found", "err", 404);
    }
  }).catch((err) => {
    form.error(res, 'bad request', err, 400)
  })
}

const addContact = (req, res) => {
  newContact(req.body).then((data) => {
    form.success(res,'here a payload', data, 201)
  }).catch((err) => {
    form.error(res, 'bad request', err, 400)
  })
}

module.exports = {
  getallByUser,
  addContact
}
