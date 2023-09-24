const { response } = require('express');
const Item = require('../models/Items');

//Add a new Item
const newItem = (req, res, next) => {
    let item = new Item({
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price
    })
    item.save()
    .then(() => {
        res.json({
            message : 'Item added succesfully.',
        })
    })
    .catch(error => {
        res.json({
            message : 'An error occurred.'
        })
    })
}

//Get an Item
const getItem = (req, res, next) => {
    let itemId = req.body.id
    Item.findById(itemId)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : 'An error occurred.'
        })
    })
}

//Remove an Item
const removeItem = (req, res, next) => {
    let itemId = req.body.id
    Item.findByIdAndRemove(itemId)
    .then(() => {
        req.json({
            message : 'Employee deleted successfully!'
        })
    })
    .catch(error => {
        req.json({
            message : 'An error ocurred'
        })
    })
}

//Edit an Item
const updateItem = (req, res, next) => {
    let itemId = req.body.id

    let updatedItem = {
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price
    }

    Item.findByIdAndUpdate(itemId, {$set: updatedItem})
    .then(() => {
        res.json({
            message : 'Item updated successfully'
        })
    })
    .catch(error => {
        req.json({
            message : 'An error ocurred'
        })
    })
}

//Get a Stock of an Item
const getStock = (req, res, next) => {
    let itemId = req.body.id

    Item.findOne(itemId, {name: 1, stock : 1})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : 'An error occurred.'
        })
    })
}

//Edit a Stock
let updateStock = (req, res, next) => {
    let itemId = req.body.id
    let newStock = {
        stock: req.body.stock
    }

    Item.findOneAndUpdate(itemId, {$set : newStock})
    .then(() => {
        res.json({
            message : 'Stock updated successfully'
        })
    })
    .catch(error => {
        req.json({
            message : 'An error ocurred'
        })
    })
}