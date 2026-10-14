const express = require("express");
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

const router = express.Router();

//create
router.post("/create", createUser);

//getall
router.get("/get", getAllUsers);

//getbyid
router.get("/:id", getSingleUser);

//Update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);

module.exports = router;
