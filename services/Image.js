const ImageModel = require('../models/Image');

const insert = async (payload) => {
    const newImage = ImageModel(payload);
    return await newImage.save();
}

const readAll = async () => {
    return await ImageModel.find();
}

const read = async (id) => {
    return await ImageModel.findById(id);
}

module.exports = {
    insert,
    readAll,
    read
}