var Maybe = require('./lib/maybe-ver1');

var person = {
    name: 'Homer Simpson',
    street: '123 Fake St.',
    address: {
      state: 133,
    },
    city: 'Springfield',
  };

console.log(Maybe(person).bind(function (p) {
    return p.log;
  }).bind(function (a) {
    return a.state;
  }).maybe('State Unknown', function (s) {
  return s;
}));

var fn = function (p) {
  return p.log;
};

var gn = function (a) {
  return a;
};

// Left Identity
console.log('Left Identity');
console.log(Maybe(person).bind(fn));
console.log(Maybe(fn(person)));
console.log('--------------');

// Right Identity
console.log('Right Identity');
console.log(Maybe(person).bind(function (person) {
  return person;
})
);
console.log(Maybe(person));
console.log('--------------');

console.log('Associativity');
console.log(Maybe(person).bind(fn).bind(gn));
console.log(Maybe(person).bind(function (person) {
    return gn(fn(person));
  }
));
console.log('--------------');

Maybe(person).bind(fn) === Maybe(fn(person)); // for all x, fn
