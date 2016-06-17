Maybe = function (value) {
    var Nothing = {
        bind: function (fn) {
            return this;
        },
        isNothing: function () {
            return true;
        },
        val: function () {
            throw new Error('cannot call val() nothing');
        },
        maybe: function (def, fn) {
            return def;
        }
    };

    Something = function (value) {
        return {
            bind: function (fn) {
                return Maybe(fn.call(this, value));
            },
            isNothing: function () {
                return false;
            },
            val: function () {
                return value;
            },
            maybe: function (def, fn) {
                return fn.call(this, value);
            }
        };
    };

    if (typeof value === 'undefined' || value === null) {
        return Nothing;
    }

    return Something(value);
};

module.exports = Maybe;
