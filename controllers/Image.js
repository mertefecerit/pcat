const ImageServices = require('../services/Image');
const fs = require('fs');
const path = require('path');

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
            if(response) return res.render('photo',{image:response});
            res.status(404).send('404');
        }).catch(err => {
            res.status(500).send("Hata Oldu : " + err);
        })
}

const imageEditPage = (req, res) =>{
    ImageServices.read(req.params.id)
        .then(response => {
            res.render('photo-edit',{image:response});
        }).catch(err => {
            res.status(500).send("Hata Oldu : " + err);
        });
} 

const updateImage = (req, res) => {
    if(req.file && req.body.image !== '') {
        req.body.image = req.file.filename;
    }else{
        delete req.body.image;
    }
    ImageServices.update(req.body, req.params.id)
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            res.status(500).send("Hata Oldu : " + err);
        });
}

const deleteImage = (req, res) => {
    ImageServices.deleteOne(req.params.id)
    .then(response => {
        fs.unlink(path.resolve(__dirname,'../','public/uploads/'+response.image), (err) => {
            if (err) throw err;
            res.redirect('/');
        });
    }).catch(err => {
        res.status(500).send("Hata Oldu : " + err);
    });
}

module.exports = {
    uploadImage,
    getImagePage,
    imageEditPage,
    updateImage,
    deleteImage
}