// var chai = require('chai');
// var chaihttp = require('chai-http');
// chai.use(chaihttp);
// var expect = chai.expect;

// process.env.MONGOLAB_URI = 'mongodb://localhost/song_test';
// require(__dirname + '/../index');
// var mongoose = require('mongoose');
// var Song = require(__dirname + '/../models/song');


// // describe('drop db after', function() {
// //   after(function(done) {
// //     mongoose.connection.db.dropDatabase(function() {
// //       done();
// //     });
// //   });


  before(function(done) {
    var songData = {title: "testtitle", artist:"testartist"};
    chai.request('localhost:3000')
      .post('/songs')
      .send(songData)
      .end(function(err, res) {
        done();
      });
  });

//   it('should create a song', function(done) {
//     var songData1 = {title: 'songname', artist: 'alt-j'};
//     chai.request('localhost:3000')
//       .post('/songs')
//       .send(songData1)
//       .end(function(err, res) {
//         expect(err).to.eql(null);
//         done();
//       });
//   });
// // });