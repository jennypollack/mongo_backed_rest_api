var express = require('express');
var User = require (__dirname + '/../models/user');
var jsonParser = require('body-parser').json();
var error = require(__dirname + '/../lib/error');
var httpBasic = require(__dirname + '/../lib/basic_http_authentication');

var authRouter = module.exports = exports = express.Router();

authRouter.post('/signup', jsonParser, function(req, res){

 User.findOne({'username': req.body.username}, function(err, data){
   if(err) return error(err, data); 

   if(!data){
    var user = new User();
    user.auth.basic.username = req.body.username;
    user.username = req.body.username;
    user.hashPassword(req.body.password);

    user.save(function(err, data) {
      if (err) return error(err, res);

      user.generateToken(function(err, token) {

      if (err) return error(err, res);

      res.json({token: token});
      });
    });

   } else{
     console.log('username already in use'); 
   }
 });

});

authRouter.get('/signin', httpBasic, function(req, res) {
  if(!(req.auth.username && !req.auth.password)) {
    console.log('no basic auth provided');
    return res.status(401).json({msg: 'authentiCat sayezzz noe!!!111'});
  }

  User.findOne({'auth.basic.username': req.auth.username}, function(err, user) {
    if (err) {
      console.log('no basic auth provided');
      return res.status(401).json({msg: 'authentiCat sayezzz noe!!!111'});
    }

    if (!user) {
      console.log('no basic auth provided');
      return res.status(401).json({msg: 'authentiCat sayezzz noe!!!111'});
    }

    if (!user.checkPassword(req.auth.password)) {
      console.log('no basic auth provided');
      return res.status(401).json({msg: 'authentiCat sayezzz noe!!!111'});
    }
    user.generateToken(function(err, token) {
      if (err) return handleError(err, res);

      res.json({token: token});
    });
  });
});
