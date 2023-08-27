// 13/4/2023

require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

require("./db/connection");
const periodicTable = require('./models/tableSchema');
const router = require("./routers/routes");

app.use(express.json());
app.use('/api/v1',router)

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to Periodic Table API"})
})

app.listen(PORT, () => console.log("Server On"));