const express = require('express');
const listsRouter = express.Router();
const List = require('../models/List')

 listsRouter.get('/', async (req, res, next) => {
    try {
        const lists = await List.find()
        res.json(lists)
    } catch (err) {
        res.json({ message: err })
    }
 })

listsRouter.post('/', async (req, res) => {
    const list = new List({
        name: req.body.name
    })
    try {
        const savedList = await list.save();
        res.json(savedList);
    } catch (err) {
        res.json({ message: err })
    }  
})

listsRouter.get('/:id', async (req, res) => {
    try {
        const foundList = await List.findById(req.params.id)
        res.json(foundList)
    } catch (err) {
        res.json({ message: err })
    }
})

listsRouter.delete('/:id', async (req, res) => {
    try {
        const removedList = await List.remove({_id: req.params.id})
        res.json(removedList)
    } catch (err) {
        res.json({ message: err })
    }
})

listsRouter.patch('/:id', async (req, res) => {
    try {
        const updatedList = await List.updateOne(
            { _id: req.params.id },
            { $set: { name: req.body.name }})
        res.json(updatedList)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = listsRouter;