const userModel = require("../model/user");
const form = require("../helper/form");

module.exports = {
  getUserById: (req, res) => {
    const { id } = req.params;
    userModel
      .getUserById(id)
      .then((data) => {
        if (data.length) {
          form.success(res, "Success", data, 200);
        } else {
          form.error(res, "Data not Found", "err", 404);
        }
      })
      .catch((err) => {
        form.error(res, "Error Occured", err, 400);
      });
  },

  getUserPhone: (req, res) => {
    const { phone } = req.params;
    userModel
      .getUserPhone(phone)
      .then((data) => {
        if (data.length) {
          form.success(res, "Success", data, 200);
        } else {
          form.error(res, "Data not Found", "err", 404);
        }
      })
      .catch((err) => {
        form.error(res, "Error Occured", err, 400);
      });
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const updateBody = {
      ...body,
      updated_at: new Date(Date.now()),
    };
    userModel
      .updateUser(updateBody, id)
      .then((data) => {
        form.success(
          res,
          "Data successfully updated",
          { id: data.updateId, ...updateBody },
          200
        );
      })
      .catch((err) => {
        form.error(res, "Encountered Error", err, 400);
      });
  },

  updatePass: (req, res) => {
    const { email } = req.decodedToken;
    const { body } = req;
    userModel
      .updatePass(body, email)
      .then((data) => {
        form.success(res, "Success Change Password", data, 200);
      })
      .catch((err) => {
        form.error(res, "Encountered Error", err, 400);
      });
  },
};
