/**
 * Created by mlingolu on 7/11/16.
 */

var express= require('express');
var ejs =require('ejs');
var router =require('./server/routes');
var path =require('path');

var app= express();

app.use(express.static(path.join(__dirname,'')));
app.engine('html',ejs.renderFile);
app.set('views', path.join(__dirname,''));
app.set('views engine', 'html');
app.use(router);

app.listen('3000',function () {
    console.log('Application is running on port 3000');
});

