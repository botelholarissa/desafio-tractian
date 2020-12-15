const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: false,
    },
    position: {
        type: String,
        required: true,
    }
})

const usersCollection = mongoose.model('user', userSchema);

module.exports = usersCollection