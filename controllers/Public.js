const ImageService = require('../services/Image');

const index = (req, res) => {
  const images = ImageService.readAll();
  images.then(response => {
    res.render('index',{images:response})
  });
};
const about = (req, res) => {
  res.render('about');
};
const addPhoto = (req, res) => {
  res.render('add-photo');
};

module.exports = {
  index,
  about,
  addPhoto,
};
