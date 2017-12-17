'use strict'
var seneca = require('seneca')();

function minimal_plugin( options ) {
  console.log('Plugin!!!');
  console.log(options);
}

seneca.use(minimal_plugin, { opcion : 'valor_opcion'});

function init(msg, res) {
    console.log('plugin initialized!');
    res();
}

function math( options ) {

    this.add({ role : 'math', cmd : 'sum'}, (msg, res) => {
      res(null, { answer: msg.left + msg.right});
    });

    this.add({ role : 'math', cmd : 'product'}, (msg, res) => {
      res(null, { answer : masg.left * msg.right });
    });

    this.add({ init : "math"}, init);

}

seneca.use(math);

seneca.add({ cmd : 'sayHello'}, (msg, res) => {
  res(null, { hello : `Hello ${msg.name}!!!`});
})

seneca.act({cmd : 'sayHello', name : 'Pedrito'}, (err, result) => {
  console.log(result);
});

seneca.act({ role : 'math', cmd : 'sum', left : 10, right : 15}, (err, result) => {
  console.log(result);
});

seneca.act('role:math, cmd:sum, left:13, right:15', (err, result) => {
  console.log(result);
});
