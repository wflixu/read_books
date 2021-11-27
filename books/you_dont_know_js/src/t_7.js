// let abc = function(){

// }

// console.log(abc.name)

// 代理

// var obj = { a: 1 },
//   handlers = {
//     get(target, key, context) {
//       // 注意：target === obj,
//       // context === pobj
//       console.log('accessing: ', key);
//       return Reflect.get(target, key, context);
//     },
//   },
//   pobj = new Proxy(obj, handlers);
// obj.a;
// // 1
// pobj.a;
// // accessing: a
// // 1



"use strict";
var foo = (function(){
    function _foo(acc,x) {
        if (x <= 1) return acc;
        return _foo( (x / 2) + acc, x - 1 );
    }
    return function(x) {
        return _foo( 1, x );
    };
})();
foo( 123456 );
