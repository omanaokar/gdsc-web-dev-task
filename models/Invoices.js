const mongoose = require('mongoose');
const itemSchema = require('./Items');
const Schema = mongoose.Schema;

mongoose.model("items", itemSchema.itemSchema)

const invoiceSchema = new Schema({
    items: [{
            type: Schema.Types.ObjectId, 
            ref: "items"
    }],
    subtotal : {
        type : Number
    },
    taxes : {
        type : Number   
    },
    discount : {
        type : Number
    },
    total : {
        type : Number
    }
}, {timestamps: true})

const Invoice = mongoose.model('Invoice', invoiceSchema)
module.exports = Invoice