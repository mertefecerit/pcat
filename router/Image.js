const router = require('express').Router();
const ImageController = require('../controllers/Image');

router.post('/add',ImageController.uploadImage)

module.exports = router;