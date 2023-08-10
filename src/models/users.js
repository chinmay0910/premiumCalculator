const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    "planName": String,
    "planType": String,
    "ageStart": Number,
    "ageEnd": Number,
    "lacFIVE": String,
    "lacTEN": String,
    "lacFIFTEEN": String,
    "lacTWENTYFIVE": String,
    "lacFIFTY": String,
    "lacHUNDRED": String,
})

// Collection
const sampleData = new mongoose.model("sampleData",dataSchema);

module.exports = sampleData;

//
// lacFIVE
// lacTEN
// lacFIFTEEN
// lacTWENTYFIVE
// lacFIFTY
// lacHUNDRED