const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const companiesCollection = mongoose.model('company', companySchema);

module.exports = companiesCollection