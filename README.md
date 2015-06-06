# htpasswd-auth [![Circle CI](https://circleci.com/gh/dickeyxxx/htpasswd-auth/tree/master.svg?style=svg)](https://circleci.com/gh/dickeyxxx/htpasswd-auth/tree/master)

read/write htpasswd files

## Checking if a password is valid

```js
htpasswd.authenticate('dickeyxxx', 'pass', './path-to-htpasswd')
.then(function (auth) {
  // auth is true if the password is valid
});
```
