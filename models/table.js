const mongoose = require('mongoose');

const { Schema } = mongoose;

const tableSchema = new Schema({

    tabeLabel: {
        type: String,
        required: true,
        unique:true
    },


},
    {
        timestamps: true
    }
);

exports.Table = mongoose.model('Table', tableSchema);