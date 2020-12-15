const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    responsible:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }, 
    status:{
        type : String,
        required : true,
        enum : ['disponivel','manutencao','desativado']
    },
    hs:{
        type: Number,
        required: true
    }
})

const assetsCollection = mongoose.model('asset', companySchema);

module.exports = assetsCollection