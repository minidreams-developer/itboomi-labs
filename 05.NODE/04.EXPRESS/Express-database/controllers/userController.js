const User = require("../models/User.js"); //

// es6 modules

// Create api

const createUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) =>
      res
        .status(201)
        .json({ message: "User created successfully", data: user }),
    )
    .catch((err) => console.log(err.message));
};

// Get api
const getAllUsers = (req, res) => {
  User.find()
    .then((user) => res.status(200).json({ success: true, data: user }))
    .catch((err) => console.log(err.message));
};

module.exports = {
  createUser,
  getAllUsers,
};
