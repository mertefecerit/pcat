const ImageService = require('../services/Image');

const index = (req, res) => {
  let images;
  let pattern = /^\d+$/; //burada regex kullanmak lazımdır. only numeric :D
  if(!req.query.page){
    images = ImageService.readAll();
  }else{
    if(req.query.page.match(pattern) && req.query.page !== '0'){
      images = ImageService.paginateImage(req.query.page);
    }else{
      images = ImageService.readAll();
    } 
  }
  images.then(images => {
    ImageService.totalImages().then(response => {
      const totalPages = Math.ceil(response / 2);
      const currentPage = req.query.page || 1;
      res.render('index',{images,totalPages,currentPage});
    });
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
