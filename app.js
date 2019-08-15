const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug'); //pug = jade

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.listen(3000, () => {
    console.log('listening on 3000')
}); 
