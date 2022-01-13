const Mongoose = require('mongoose');

const ImageModel = new Mongoose.Schema({
    title: String,
    desc: String,
    image: String,
},{timestamps:true, versionKey: false});


module.exports = Mongoose.model('Image', ImageModel);