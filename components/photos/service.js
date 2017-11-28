const PhotosDao = require('./private/photo-dao');

class PhotosSevice {

    insertPhotos(photos) {
        return new Promise((resolve, reject) => {
            PhotosDao.insertData(photos).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }
    insertPhoto(photo1,photo2) {
        return new Promise((resolve, reject) => {
          let photos = photo2
            if(photo1.size > photo2.size)
               photos = photo1;
            PhotosDao.insertData({
                content_type:photos.content_type,
                image:photos.image,
                size:photos.size,
                width:photos.width,
                height:photos.height,
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        })
    }


}

module.exports = new PhotosSevice();
