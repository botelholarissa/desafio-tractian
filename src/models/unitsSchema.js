const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'company',
        required: false
    }
})

const unitsCollection = mongoose.model('unit', unitSchema);

module.exports = unitsCollection