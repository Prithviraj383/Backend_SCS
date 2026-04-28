const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb+srv://yt:qMgCMI28CocYR44W@cluster0.ywg5glo.mongodb.net/halley")

    console.log("Connected to DB")
}

module.exports = connectDB