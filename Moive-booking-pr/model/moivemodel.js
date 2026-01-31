const mongoose = require('mongoose');


const moivedata = mongoose.Schema({
    moivename: {
        type: String
    },
    dname: {
        type: String
    },
    language: {
        type: String
    },
    releasedate: {
        type: Date
    },
    moivelength: {
        type: Number
    },
    moiveImage: {
        type: String
    },
    overview: {
        type: String
    }
})



module.exports = mongoose.model('moives', moivedata)