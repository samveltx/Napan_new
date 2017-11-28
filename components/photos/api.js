const express = require('express');
const PhotosRouter = express.Router();
const PhotosSevice = require('./service');
const multer = require('multer');
const sizeof = require('image-size');
const Base64 = require('base-64');
const utf8 = require('utf8');
const fs = require('fs');
const upload = multer({ dest: 'resources/'});


function base64_encode(file) {
      var bitmap = fs.readFileSync(file);
      return new Buffer(bitmap).toString('base64');
}

function base64_decode(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
  }

PhotosRouter.post('/processing',upload.single('avatar'),(req, res) => {
  //create img base64_encode
    let img = base64_encode(req.file.path);

    let dimensions = sizeof('{dest}/{filename}'.replace('{dest}',req.file.destination)
                          .replace('{filename}',req.file.filename));
    let photos = {
        content_type: req.file.mimetype,
        image: img,
        size: req.file.size,
        width: dimensions.width,
        height: dimensions.height
    }
    PhotosSevice.insertPhotos(photos).then(data => {
      let filename = req.file.filename;
         fs.unlink('./resources/{filename}'.replace('{filename}',filename));
         //data.image = base64_decode(img,'insert_img.jpg');
         console.log(data);
        return res.send(data);
    });
});

///////////////////////////////      insert two photos       DIRTY        ///////////////////////////////////////////////////

PhotosRouter.post('/max',upload.array('file', 2),(req, res) => {
  let file = req.files;

    let img0 = base64_encode(file[0].path);
    let img1 = base64_encode(file[1].path);
    let dimensions0 = sizeof('{dest}/{filename}'.replace('{dest}',file[0].destination)
                          .replace('{filename}',file[0].filename));
    let dimensions1 = sizeof('{dest}/{filename}'.replace('{dest}',file[1].destination)
                          .replace('{filename}',file[1].filename));
    let photo0 = {
        content_type: file[0].mimetype,
        image: img0,
        size: file[0].size,
        width: dimensions0.width,
        height: dimensions0.height
    }
    let photo1 = {
        content_type: file[1].mimetype,
        image: img1,
        size: file[1].size,
        width: dimensions1.width,
        height: dimensions1.height
    }
    PhotosSevice.insertPhoto(photo0,photo1).then(data => {
      let filename0 = file[0].filename;
         fs.unlink('./resources/{filename}'.replace('{filename}',filename0));
         let filename1 = file[1].filename;
            fs.unlink('./resources/{filename}'.replace('{filename}',filename1));
        return res.send(data);
    });
  });
module.exports = PhotosRouter;
