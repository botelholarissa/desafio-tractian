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
    },
    units: [{
        type: Schema.Types.ObjectId,
        ref: 'unit',
        required: false
    }],
    assets: [{
        type: Schema.Types.ObjectId,
        ref: 'asset',
        required: false
    }],
    employees:[{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false
    }]
})

const companiesCollection = mongoose.model('company', companySchema);

module.exports = companiesCollection