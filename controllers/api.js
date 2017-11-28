const UsersApi = require('./../components/users/api');
const PhotosApi = require('./../components/photos/api');

class ApiV1 {

 initilize(app){
   app.use('/api/users', UsersApi);
   app.use('/api/photos', PhotosApi);
   
   app.get('/',(req,res) =>{
     return res.render('register');
   });
 }
}

module.exports = new ApiV1();
