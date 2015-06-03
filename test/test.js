'use strict';

var expect   = require('chai').expect;
var htpasswd = require('../index');

describe('htpasswd', function () {
  it('returns false with an empty htpasswd', function () {
    return htpasswd.authenticate('dickeyxxx', 'pass', './test/fixtures/blank')
    .then(function (auth) {
      return expect(auth).to.be.false;
    });
  });

  it('returns true with correct password', function () {
    return htpasswd.authenticate('dickeyxxx', 'pass', './test/fixtures/md5')
    .then(function (auth) {
      return expect(auth).to.be.true;
    });
  });
});
