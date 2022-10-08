const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({

    numberOfheadcount: {

        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

const customer = mongoose.model('customer', customerSchema);

module.exports = {customer }
