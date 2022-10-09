const mongoose = require('mongoose');

const { Schema } = mongoose;

const ownerSchema = new Schema({

    numberOfTable: {
        type: Number,
        // required: true
    },
    name:{type:String},

    numberOfChair: {
        type: Number,
        // required:true,
        // max:4
    }

},
    {
        timestamps: true
    }
);

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = { Owner }