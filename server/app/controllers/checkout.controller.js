const db = require("../models");
const CheckOut = db.checkout;
const OP = db.Sequelize.Op;

exports.findAll = (req, res) => {
  CheckOut.findAll().then((data) => {
    res.send(data);
  });
};

exports.create = (req, res) => {
  console.log(req.body)
  CheckOut.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: "Could not insert into the table",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  CheckOut.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({
        message: "Could not find the data",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  CheckOut.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "CheckOut was deleted",
        });
      } else {
        res.send({
          message: "Could not delete",
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: "Database error",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  CheckOut.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "CheckOut was updatedd",
        });
      } else {
        res.send({
          message: "Could not update",
        });
      }
    })
    .catch((e) => {
      res.status(500).send({
        message: "Database error",
      });
    });
};
