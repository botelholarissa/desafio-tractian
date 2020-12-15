const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: Schema.Types.ObjectId,
        ref: 'company',
        required: false
    },
    position: {
        type: String,
        required: false,
    }
})

const usersCollection = mongoose.model('user', userSchema);

module.exports = usersCollection