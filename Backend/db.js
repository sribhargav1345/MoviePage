const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const mongoDB = async() => {

    const PASSWORD = process.env.PASSWORD;

    const mongoURL = `mongodb+srv://sribhargav1345:${PASSWORD}@imdb-clone.gobsajr.mongodb.net/?retryWrites=true&w=majority&appName=IMDB-Clone`

    try{
        await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("Problem connecting Database", err);
    }
}

module.exports = mongoDB;