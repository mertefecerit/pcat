const router = require('express').Router();
const ImageController = require('../controllers/Image');
const multerUploader = require('../middlewares/fileUploader');

router.get('/:id',ImageController.getImagePage);
router.get('/edit/:id',ImageController.imageEditPage);
router.post('/add', multerUploader.single('image'), ImageController.uploadImage);
router.post('/update/:id', multerUploader.single('image'), ImageController.updateImage);

module.exports = router;