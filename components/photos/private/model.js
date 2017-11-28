const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema = Schema ({
    image: {
        type: Buffer,
        index: {unique: true}
    },
    content_type: {
        type: String
    },
    size: {
        type:Number
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    }  
});

module.exports = mongoose.model('photos', photoSchema);
