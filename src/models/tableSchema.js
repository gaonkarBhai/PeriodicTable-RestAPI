const mongoose = require("mongoose")

const periodicSchema = new mongoose.Schema({
    atomicNumber: {
        type: Number,
        require: true,
        unique:true
    },
    symbol: {
        type: String,
        require: true,
        unique: true,
        trim:true
    },
    name: {
        type: String,
        require: true,
        unique:true,
        trim:true
    },
    atomicMass: {
        type: Number,
        require: true
    },
    electronegativity: {
        type: Number,
        require: true
    },
    meltingPoint: {
        type: Number,
        require: true
    },
    boilingPoint: {
        type: Number,
        require: true
    },
    density: {
        type: Number,
        require: true
    },
    groupBlock: {
        type: String,
        require: true,
        trim:true
    },
    yearDiscovered: {
        type: Number,
        require: true
    }
})

const periodicTable = new mongoose.model("PeriodicElement", periodicSchema);

module.exports = periodicTable;