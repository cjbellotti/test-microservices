'use strict'

var seneca = require('seneca')();

seneca.add({ role : 'math', cmd : 'sum'}, (msg, res) => {
  var sum = msg.left + msg.right;
  res(null, { answer : sum});
});

seneca.add({ role : 'math', cmd : 'product'}, (msg, res) => {
  var product = msg.left * msg.right;
  res(null, { answer : product});
});

// seneca.act({ role : 'math', cmd : 'sum', left : 1, right : 2}, console.log);
seneca.act({ role : 'math', cmd : 'product', left : 3, right : 4}, console.log);

seneca.act({
  role : 'math',
  cmd : 'sum',
  left : 1,
  right : 3
}, (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log('<------------------------------->');
  console.log(data);
});
