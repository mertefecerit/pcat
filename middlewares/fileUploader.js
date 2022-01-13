const multer = require('multer');
const path = require('path');

const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname,'../public/uploads'));
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        cb(null, 'uploads_' + timestamp + path.extname(file.originalname));
    }
});

const uploader = multer({storage: myStorage})

module.exports = uploader;