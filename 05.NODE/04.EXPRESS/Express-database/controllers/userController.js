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

// Get single User
// req.body ={}, req.url = "", req.params

const getSingleUser = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => res.status(200).json({ Success: true, data: user }))
    .catch((err) => console.log(err.message));
};

// Update user
const updateUser = (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  // model.findByIdAndUpdate(identifier, {updated data})

  User.findByIdAndUpdate(id, {
    name: newData.name,
    age: newData.age,
    city: newData.city,
  })
    .then((updatedUser) =>
      res.status(200).json({ success: true, data: updatedUser }),
    )
    .catch((err) => console.log(err.message));
};

// Delete api
const deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((user) =>
      res
        .status(200)
        .json({ Message: "user Deleted Successfully", data: user }),
    )
    .catch((err) => console.log(err.message));
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
