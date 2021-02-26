const express = require('express');
const listsRouter = express.Router();
const List = require('../models/List')

//  listsRouter.get('/', (req, res, next) => {
//      res.send()
//  })

listsRouter.post('/', async (req, res) => {
    const list = new List({
        name: req.body.name
    })

    try {
        const savedList = await list.save();
        res.json(savedList);
    } catch (err) {
        res.json({message: err})
    }  
})

module.exports = listsRouter;