function* gen(x) {
    var y = yield + 2;
    return y;
}
var g = gen(1);
g.next();

var Thunk = function(fn) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return function(callback) {
            args.push(callback);
            return fn.apply(this, args);
        }
    }
}