const ImageModel = require('../models/Image');

const insert = async (payload) => {
    console.log(payload);
    const newImage = ImageModel(payload);
    return await newImage.save();
}

module.exports = {
    insert,
}