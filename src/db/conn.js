const mongoose = require('mongoose');
require('dotenv').config();

let mongoDB_URL = process.env.mongoDB_URL;
// mongoose.connect("mongodb://0.0.0.0:27017/chinmay").then(console.log("Connected to server"))
mongoose.connect(mongoDB_URL).then(console.log("Connected to server"))
.catch((e)=> console.log(`Not Connected -- ${e}`));

//115.96.218.93/32 