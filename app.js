var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/example',
    function(request, response){
        response.send('Olen esimerkki');
        console.log('Olen esimerkki');
    }
);

app.use(
    function(req,res,seuraava){
        console.log('Yleinen väliohjelmisto nimeltä');
        seuraava();
    }
);

app.get('/example/:name',
    function(request, response){
        response.send('hello ' + request.params.name);
        console.log('hello ' + request.params.name);
});
app.get('/example/:name/:lastname',
    function(request, response){
        response.send('hello ' + request.params.name+" "+ request.params.lastname);
        console.log('hello ' + request.params.name.age+" "+ request.params.lastname);
});

app.post('/',
    function(request,sponse){
        sponse.send(request.body);
        console.log(request.body);
    }
);


module.exports = app;
