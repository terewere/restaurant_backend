const mongoose = require('mongoose');

const { Schema } = mongoose;

const tableSchema = new Schema({

    label: {
        type: String,
        required: true,
        unique:true
    },

    available: {
        type: Boolean,
        required: true,
        default:true
    },
    chairs: [{
        type: Schema.Types.ObjectId,
        ref: "Chair"
    }]

},

);

exports.Table = mongoose.model('Table', tableSchema);


