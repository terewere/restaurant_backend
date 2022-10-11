const mongoose = require('mongoose');

const { Schema } = mongoose;

const chairSchema = new Schema({

    label: {
        type: String,
        required: true,
     },

    available: {
        type: Boolean,
        required: true,
        default:true
    },
    table: {
        type: Schema.Types.ObjectId,
        ref: "Table"
    }


}
);

exports.Chair = mongoose.model('Chair', chairSchema);
