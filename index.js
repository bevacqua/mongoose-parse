'use strict';

var parts = /^E11000 duplicate key error (index|collection): (?:[a-z-.]+\.)+([a-z]*) index\: ([a-z]+)_([0-9]+)/;

function parse (err) {
  var matches = err && err.message.match(parts);
  if (matches) {
    return { code: 11000, path: matches[3] };
  } else {
        var matches = err && err.message.match(/E11000 duplicate key error index: (?:[a-z-_]+\.)+\$_?([a-z]+)/);
        if (matches) {return {code: 11000, path: matches[1]}; }
  }
  return err;
}

module.exports = parse;
