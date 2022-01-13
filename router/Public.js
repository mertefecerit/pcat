const router = require('express').Router();
const PublicController = require('../controllers/Public');

router.get('/', PublicController.index);
router.get('/about', PublicController.about);
router.get('/add-photo', PublicController.addPhoto);

module.exports = router;
