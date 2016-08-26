/**
 * Created by mlingolu on 7/18/16.
 */

var router = require('express').Router();




 router.all('/',function (req,res,next) {
     res.render('index.html');
     next();
 });


module.exports=router;