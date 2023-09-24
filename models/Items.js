const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name:{
        type: String
    },
    stock:{
        type: Number
    },
    price:{
        type: Number
    }
}, {timestamps: true})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item