const ImageServices = require('../services/Image');

const uploadImage = (req, res) => {
    req.body.image = req.file.filename;
    ImageServices.insert(req.body)
    .then(()=>{
        res.redirect('/');
    }).catch(err => {
        res.status(500).send('Hata Oldu : ' + err);
    });
}

const getImagePage = (req, res) => {
    ImageServices.read(req.params.id)
        .then(response => {
            res.render('photo',{image:response});
        }).catch(err => {
            res.status(500).send("Hata Oldu : " + err);
        })
}

module.exports = {
    uploadImage,
    getImagePage
}