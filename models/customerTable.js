const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerTableSchema = new Schema({

    numberOfheadcount: {

        type: Number,
        required: true

    },

    tableLabel: {

        type: Number,
        required: true,
        unique: true

    }
},
    {
        timestamps: true
    }
);

exports.customerTable = mongoose.model('customerTable', customerTableSchema);