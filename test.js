'use strict';

var parse = require('./');

console.log(parse(null));
console.log(parse({ message: 'something else entirely' }));
console.log(parse({ message: 'E11000 duplicate key error index: stompflow.members.$email_1  dup key' }));
console.log(parse({ message: 'E11000 duplicate key error index: stompflow-test.members.$email_1  dup key' }));
