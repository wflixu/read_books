// 代替 new 操作的方法
　　
Object.beget = function(o) {　　　　
  var F = function(o) {};　　　　
  F.prototype = o;　　　　
  return new F;　　
};

// Function.method('new', function() {
//   var that = Object.beget(this.prototype);
//   var other = this.apply(that, arguments);
//   return (typeof other === 'object' && other) || that;
// });

var Mammal = function(name) {
  this.name = name;
}
Mammal.prototype.get_name = function() {
  return this.name;

}

Mammal.prototype.says = function() {
  return this.saying || '';
}

var myMammal = new Mammal('herb the mammal');
var name = myMammal.get_name();

var Cat = function(name) {
  this.name = name;
  this.saying = 'meow';
}
Cat.prototype = new Mammal();
Cat.prototype.purr = function(n) {
  var i, s = '';
  for (i = 0; i < n; i++) {
    if (s) {
      s += '-';
    }
    s += "r";
  }
  return s;

}
Cat.prototype.get_name = function() {
  return this.says() + '' + this.name + '' + this.says();
}
var myCat = new Cat('henrietta');
console.log(myCat.says());
console.log(myCat.purr(5));
console.log(myCat.get_name());

Function.method('inherits', function(Parent) {
  this.prototype = new Parent();
  return this;
});

// prototypal
var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';


// Ｐａｒｔｓ
var eventuality = function(that) {
  var registry = {};
  that.fire = function(event) {
    var array, func, handler, i, type = typeof event === 'string' ? event : event.type;
    if (registry.hasOwnProperty(type)) {
      array = registry[type];
      for (i = 0; i < array.length; i++) {
        handler = array[i];
        func = handler.method;
        if (typeof func === 'string') {
          func = this[func];
        }
        func.apply(this.handler.parameters || event);
      }
    }
    return this;
  }
  that.on = function(type, method, parameters) {
    var handler = {
      method: method,
      parameters: parameters
    }
    if (registry.hasOwnProperty(type)) {
      registry[type].push(handler);
    } else {
      registry[type] = [handler];
    }
    return this;
  };
  return that;

};