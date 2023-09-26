const { response } = require('express');
const Item = require('../models/Items');

//Add a new Item
const newItem = (req, res, next) => {
    let item = new Item.Item({
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
    Item.Item.findById(itemId)
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
    Item.Item.findByIdAndRemove(itemId)
    .then(() => {
        res.json({
            message : 'Item deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
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
        res.json({
            message : 'An error ocurred'
        })
    })
}

//Get a Stock of an Item
const getStock = (req, res, next) => {
    let itemId = req.body.id

    Item.findOne({_id : itemId}, {name: 1, stock : 1})
    .then(response => {
        res.json({
            stock : response.stock
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

    Item.findOneAndUpdate({_id : itemId}, {$set : newStock})
    .then(() => {
        res.json({
            message : 'Stock updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message : 'An error ocurred'
        })
    })
}

//Add stock 
let addStock = (req, res, next) => {
    let itemId = req.body.id
    let increaseVal = {
        stock : req.body.stock
    }
    Item.findOneAndUpdate({_id : itemId}, {$inc : increaseVal})
    .then(() => {
        res.json({
            message : 'Stock added successfully'
        })
    })
    .catch(error => {
        res.json({
            message : 'An error ocurred'
        })
    })
}

//Remove stock 
let removeStock = (req, res, next) => {
    let itemId = req.body.id
    let decreaseVal = {
        stock : -req.body.stock
    }
    Item.findOneAndUpdate({_id : itemId}, {$inc : decreaseVal})
    .then(() => {
        res.json({
            message : 'Stock removed successfully'
        })
    })
    .catch(error => {
        res.json({
            message : 'An error ocurred'
        })
    })
}

module.exports = {
    newItem, getItem, removeItem, updateItem, getStock, updateStock, removeStock, addStock
}