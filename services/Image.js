const ImageModel = require('../models/Image');

const insert = async (payload) => {
    const newImage = ImageModel(payload);
    return await newImage.save();
}

const readAll = async () => {
    return await ImageModel.find();
}

module.exports = {
    insert,
    readAll
}