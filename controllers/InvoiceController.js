const { response } = require('express');
const Invoice = require('../models/Invoices');
const Item = require('../models/Items');


//Add an invoice
const newInvoice = (req, res, next) => {
    let invoice = new Invoice({
        items: req.body.items,
        subtotal: req.body.subtotal,
        taxes: req.body.tax,
        discount: req.body.discount,
        total: req.body.total
    })
    invoice.save()
    .then(() => {
        res.json({
            message : 'Invoice added succesfully.',
        })
    })
    .catch(error => {
        res.json({
            message : 'An error occurred.'
        })
    })
}

//Get an Invoice
const getInvoice = (req, res, next) => {
    let invoiceId = req.body.id
    Invoice.findById(invoiceId)
    .populate("items")
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error)
    })
}

//Remove an Invoice
const removeInvoice = (req, res, next) => {
    let invoiceId = req.body.id
    Invoice.findByIdAndRemove(invoiceId)
    .then(() => {
        res.json({
            message : 'Invoice deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message : 'An error ocurred'
        })
    })
}

//Update an Invoice
const updateInovice = (req, res, next) => {
    let invoiceId = req.body.id
    let updatedInvoice = {
        items: req.body.items,
        subtotal: req.body.subtotal,
        taxes: req.body.tax,
        discount: req.body.discount,
        total: req.body.total
    }

    Invoice.findByIdAndUpdate(invoiceId, {$set: updatedInvoice})
    .then(() => {
        res.json({
            message : 'Invoice updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message : 'An error ocurred'
        })
    })
}

module.exports = {
    newInvoice, getInvoice, removeInvoice, updateInovice
}