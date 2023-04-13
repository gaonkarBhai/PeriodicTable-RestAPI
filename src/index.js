// 13/4/2023

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

require("../src/db/connection");
const periodicTable = require('../src/models/tableSchema');
const router = require("./routers/routes");

app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log("Server On"));