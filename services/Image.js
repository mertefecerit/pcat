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

const update = async (payload, id) => {
    return await ImageModel.findByIdAndUpdate(id, payload);
}

const deleteOne = async (id) => {
    return await ImageModel.findByIdAndDelete(id);
}

module.exports = {
    insert,
    readAll,
    read,
    update,
    deleteOne
}