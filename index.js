Maybe = function (value) {
    var Nothing = {
        bind: function (fn) {
          return this;
        },
      };

    var Something = function (value) {
        return {
            bind: function (fn) {
              return Maybe(fn.call(this, value));
            },
          };
      };

    if (typeof value === 'undefined' || value === null)
        return Nothing;

    return Something(value);
  };

module.exports = Maybe;
