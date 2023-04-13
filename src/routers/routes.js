const express = require("express");
const router = new express.Router();
const periodicTable = require('../models/tableSchema');

// CURD Operations

// POST Request -> creating a document
router.post("/elements", async (req, res) => {
    try {
        const addEle = new periodicTable(req.body)
        console.log(req.body);
        const ele = await addEle.save();
        res.status(201).send(ele);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET Request -> getting full document
router.get('/elements', async (req, res) => {
    try {
        const data = await periodicTable.find({}).sort({"atomicNumber":1});
        res.status(201).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
});

// GET Request -> getting single document
router.get('/elements/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await periodicTable.findById({_id:id});
        res.status(201).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
});

// PATCH Request -> updating single document
router.patch('/elements/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await periodicTable.findByIdAndUpdate({_id:id},{$set:req.body},{new:true});
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

// DELETE Request -> deleting single document
router.delete('/elements/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await periodicTable.findByIdAndDelete({_id:id});
        res.status(201).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;