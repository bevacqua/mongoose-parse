'use strict';

var parts = /^E11000 duplicate key error index: (?:[a-z-]+\.)+\$([a-z]+)/;

function parse (err) {
  var matches = err && err.message.match(parts);
  if (matches) {
    return { code: 11000, path: matches[1] };
  }
  return err;
}

module.exports = parse;
