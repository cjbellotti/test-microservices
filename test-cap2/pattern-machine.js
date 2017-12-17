'use strict'
var seneca = require('seneca')();

seneca.add({ cmd : 'wordcount'}, (msg, res) => {
  var length = msg.phrase.split(' ').length;
  res(null, { words : length});
});

seneca.add({ cmd : 'wordcount', skipShort: true}, (msg, res) => {
  var words = msg.phrase.split(' ');
  var validWords = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      validWords++;
    }
  }
  res(null, {words: validWords});
});

seneca.add({ cmd : 'message', esclamation : true}, (msg, res) => {
  res(null, { result : `[${msg.phrase}!!!]`});
});

seneca.add({ cmd : 'message'}, (msg, res) => {
  res(null, { result : `[${msg.phrase}]`});
});

seneca.act({cmd : 'wordcount', phrase : 'Hello world this is Seneca'}, (err, res) => {
  console.log(res);
});

seneca.act({cmd : 'wordcount', skipShort : true, phrase: 'Hello world this is Seneca'}, (err, res) => {
  console.log(res);
});

seneca.act({ cmd : 'message', phrase : 'Hola mundo Seneca', esclamation : true}, (err, res) => {
  console.log(res.result);
});

seneca.act({ cmd : 'message', phrase : 'Hola mundo Seneca'}, (err, res) => {
  console.log(res.result);
});
