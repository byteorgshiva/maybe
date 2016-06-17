var Nothing = {};
var Maybe = require('./');

var person = {
    name: 'Homer Simpson',
    address: {
        street: '123 Fake St.',
        city: 'Springfield',
      },
  };

var state = Maybe(person).bind(function (p) {
  return p.address;
}).bind(function (a) {
  return a.state;
});

if (state === Nothing) {
  console.log('State Unknown');
} else {
  console.log(state);
}
