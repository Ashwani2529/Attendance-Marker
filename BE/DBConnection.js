const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });
mongoose.set('strictQuery', false);

const DBConnection = () => {
    mongoose.connect(process.env.MONGO_URI, 
    {
        connectTimeoutMS: 300000,
        socketTimeoutMS:3000000, 
    }).then((data) => {
        console.log(`mongoDB connected`);
    });
};

module.exports = {
    DBConnection
}