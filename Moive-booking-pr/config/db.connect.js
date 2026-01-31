const mongoose = require('mongoose')

const dbconnection = () => {

    mongoose.connect('mongodb+srv://organics:Heer2005@cluster0.bp0a5oh.mongodb.net/moives')
        .then(() => console.log('Db connect'))
        .catch((err) => console.log(err))
}

module.exports = dbconnection;
