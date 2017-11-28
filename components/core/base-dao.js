
class BaseDao {

    constructor(collection) {
        this.collection = collection;
    }

    getData(query) {

        if(!this.collection) {
            throw 'contract violation';
        }
      query = query || {};
      return this.collection.find(query);
    }
    insertData(query) {
      if(!query) {
        throw 'query invalid';
      }
      return this.collection.create(query);
    }
}
module.exports = BaseDao;
