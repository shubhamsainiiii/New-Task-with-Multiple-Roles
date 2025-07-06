const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8080;
const MONGOURL = process.env.MONGOURL

mongoose.connect(MONGOURL).then(() => {
    console.log("Database Connected succesfully");
}).catch(() => {
    console.log("Errro in connecting Database")
})
app.listen(port, () => {
    console.log(`server is running on Port ${port}`)
})
