'use strict'

function employeeData( options ) {
  this.add({ role : 'employee', cmd : 'add'}, (msg, respond) => {
    this.make('employee').data$(msg.data).save$(respond);
  });

  this.add({ role : 'employee', cmd : 'get'}, (msg, respond) => {
    this.make('employee').load$(msg.id, respond);
  });
}


var seneca = require('seneca')().use(employeeData);

var employee = {
  name : 'Pedrito',
  surname : 'Gomez',
  position : 'Software Developer'
}

seneca.act({ role : 'employee', cmd : 'add', data: employee}, (err, msg) => {
  console.log(msg);
  seneca.act( { role : 'employee', cmd : 'get', id : msg.id}, (err, datos) => {
    console.log('GET');
    console.log(datos);
  });
});
