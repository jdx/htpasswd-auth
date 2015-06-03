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

  it('supports md5', function () {
    return htpasswd.authenticate('dickeyxxx', 'pass', './test/fixtures/md5')
    .then(function (auth) {
      return expect(auth).to.be.true;
    });
  });

  it('supports bcrypt', function () {
    return htpasswd.authenticate('dickeyxxx', 'pass', './test/fixtures/bcrypt')
    .then(function (auth) {
      return expect(auth).to.be.true;
    });
  });

  it('supports sha1', function () {
    return htpasswd.authenticate('dickeyxxx', 'pass', './test/fixtures/sha1')
    .then(function (auth) {
      return expect(auth).to.be.true;
    });
  });

  it('supports crypt', function () {
    return htpasswd.authenticate('dickeyxxx', 'pass', './test/fixtures/crypt')
    .then(function (auth) {
      return expect(auth).to.be.true;
    });
  });
});
