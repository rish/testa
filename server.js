var express = require('express');
var app = express();
var r = require('rethinkdb');

app.get('/', function(req, res) {

  var conn = r.connect(function(err, conn) {
    if(err) {
      console.log("Connection error");
      console.log(err);
    } else {
      console.log("Connection successful");
      r.dbList().run(conn, function(err, cursor) {
        console.log(cursor);
      });
    }
  });

  res.send('Nope ... ');

});

app.listen(1337);
