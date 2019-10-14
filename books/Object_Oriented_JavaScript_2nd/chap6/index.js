// 6.8
function deepCopy(p, c) {
  var c = c || {};
  for (i in p) {
    if (p.hasOwnProperty(i)) {
      if (typeof p[i] === 'object') {
        c[i] = Array.isArray(p[i]) ? [] : {};
        deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
  }
  return c;
}

function isArray() {
  if (Array.isArray !== 'function') {
    Array.isArray = function(candidate) {
      return Object.prototype.toString.call(candidate) === '[object Array]';
    };
  }
}
function print(p) {
  for (i in p) {
    if (p.hasOwnProperty(i)) {
      if (typeof p[i] === 'object') {
         print(p[i]);
      } else {
        console.log(i+':'+p[i]);
      }
    }
  }
}
