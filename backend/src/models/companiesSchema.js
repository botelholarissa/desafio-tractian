const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const companiesCollection = mongoose.model('company', companySchema);

module.exports = companiesCollection