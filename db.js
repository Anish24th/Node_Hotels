const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/LearnNodeJS';

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