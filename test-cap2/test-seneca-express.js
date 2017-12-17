'use strict'
var Express = require('express');
var bodyParser = require('body-parser');
var seneca = require('seneca')();

function Web ( options ) {
  this.add({
    role : 'api',
    cmd : 'bazinga'
  }, (args, done) => {
    done(null, { bar : 'Bazinga!'});
  });

  this.add({
    role : 'api',
    cmd : 'hello-world'
  }, (args, done) => {
    done(null, { bar : 'Hello World!!!'});
  });

}

seneca.use(Web);

seneca.act('role:web', {
  use : {
    prefix : '/my-api',
    pin : { role : 'api', cmd : '*'},
    map : {
      bazinga : { GET : true},
      'hello-world' : { GET : true }
    }
  }
});

var app = Express();
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use( seneca.export('web'));
app.listen(3000, () => console.log('Server listening on port 3000...'));
