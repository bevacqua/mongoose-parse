'use strict';

var parse = require('./');

console.log(parse(null));
console.log(parse({ message: 'something else entirely' }));
console.log(parse({ message: 'E11000 duplicate key error index: stompflow.members.$email_1  dup key' }));
console.log(parse({ message: 'insertDocument :: caused by :: 11000 E11000 duplicate key error index: pvn.users.$_email_1  dup key: { : "j@b.com" }' }));
console.log(parse({ message: 'E11000 duplicate key error index: stompflow-test.members.$email_1  dup key' }));
console.log(parse({message: 'E11000 duplicate key error collection: black-back-space.users index: username_1 dup key: { : "SargTeX" }'}));
