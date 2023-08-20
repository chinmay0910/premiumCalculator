const mongoose = require('mongoose');

// mongoose.connect("mongodb://0.0.0.0:27017/chinmay").then(console.log("Connected to server"))
mongoose.connect("mongodb+srv://chinmayrmhatre:ZUNJtG8ZxFADZU9E@premiumcalculator.uelz72i.mongodb.net/?retryWrites=true&w=majority").then(console.log("Connected to server"))
.catch((e)=> console.log(`Not Connected -- ${e}`));