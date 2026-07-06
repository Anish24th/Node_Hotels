const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL; 
mongoose.connect(mongoURL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.log("MongoDB connection failed:", err);
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Mongoose connected");
});

db.on('error', (err) => {
    console.log("MongoDB error:", err);
});

module.exports = db;