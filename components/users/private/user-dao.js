const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao');
const Conn = require('./../../core/db-connection');

class UserDAO extends BaseDao {
    constructor() {
        super(Conn.model('users'));
    }
}
module.exports = new UserDAO();
