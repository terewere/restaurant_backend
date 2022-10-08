const mongoose = require('mongoose');

const { Schema } = mongoose;

const ownerSchema = new Schema({

    ownerName: {
        type: String,
        required: true
    },

    numberOfTables: {
        type: Number,
        required: true
    },

    numberOfChairs: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = {Owner}