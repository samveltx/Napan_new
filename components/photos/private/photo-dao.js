const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao');
const Conn = require('./../../core/db-connection');

class PhotosDao extends BaseDao {
    constructor() {
        super(Conn.model('photos'));
    }
}

module.exports = new PhotosDao();
