const AppConstants = require('./../settings/constants');
class Utility {
    static parseQuery(req, res, next) {
       req.query.offset = parseInt(req.query.offset);
       if(!isFinite(req.query.offset)) {
          req.query.offset = AppConstants.OFFSET_DEFAULT_VALUE;
       }
       req.query.limit = parseInt(req.query.limit);
       if(!isFinite(req.query.limit)) {
          req.query.limit = AppConstants.LIMIT_DEFAULT_VALUE;
       }
       next();
    }
}

module.exports = Utility;
