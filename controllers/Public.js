const index = (req, res) => {
  res.render('index');
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
