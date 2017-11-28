const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();

const ApiV1 = require('./controllers/api');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
ApiV1.initilize(app);


app.listen(3000);
