const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//process.env.variablename

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome....." });
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT} successfully`);
    });
  })
  .catch((err) => console.log(err));
