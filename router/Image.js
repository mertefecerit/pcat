const router = require('express').Router();
const ImageController = require('../controllers/Image');
const multerUploader = require('../middlewares/fileUploader');

router.post('/add', multerUploader.single('image'), ImageController.uploadImage)

module.exports = router;