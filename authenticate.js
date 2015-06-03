'use strict';

var fs  = require('fs');
var md5 = require('apache-md5');

function checkPassword (digest, password) {
  if (digest.substr(0, 6) === '$apr1$') {
    return digest === md5(password, digest);
  }
  console.log(digest, password);
  return false;
}

function authenticate (username, password, htpasswd) {
  return new Promise(function (fulfill, reject) {
    fs.readFile(htpasswd, 'utf8', function (err, data) {
      if (err) { return reject(err); }
      var lines = data.split('\n');
      lines.forEach(function (line) {
        line = line.split(':');
        if (line[0] === username) {
          fulfill(checkPassword(line[1], password));
        }
      });
      fulfill(false);
    });
  });
}

module.exports = authenticate;
