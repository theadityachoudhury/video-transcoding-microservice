const express = require("express");
const { getUser } = require("../Controllers/auth");
const app = express.Router();

app.get("/getUser", getUser)



module.exports = app;