var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

process.env.MONGOLAB_URI = "mongodb://localhost/songs_dev_test";
require(__dirname + "/../index.js");
var mongoose = require('mongoose');
var User = require(__dirname + '/../models/user.js');

describe('auth routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should signup a new user', function(done) {
    var userData = {username: 'test', password: 'test123'};
    chai.request('localhost:3000')
      .post('/api/signup')
      .send(userData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('token');
        done();
      });
  });

  it('should be able to signin', function(done) {
    chai.request('localhost:3000')
      .get('/api/signin')
      .auth('test', 'test123')
      .end(function(err, res) {
        expect(err).to.eql(null);
        done();
      });
  });
});

