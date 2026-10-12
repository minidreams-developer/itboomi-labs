const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController.js");

const router = express.Router();

//create
router.post("/create", createUser);

//getall
router.get("/get", getAllUsers);
module.exports = router;
