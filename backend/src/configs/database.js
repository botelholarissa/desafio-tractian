const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/tractian';

const connect = () => {
    mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;

    connection.on('error', () => console.error("Couldn't connect to MongoDB."));
    connection.once('open', () => console.log('MongoDB connected.'));
}

module.exports = { connect };