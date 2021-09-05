export const forEeach = (arr, fn) => {
  for (let index = 0; index < arr.length; index++) {
    fn(arr[index]);
  }
};

export const every = (arr, fn) => {
  let result = true;
  for (const item of arr) {
    result = result && fn(item);
  }
  return result;
};

export const some = (arr, fn) => {
  let result = false;
  for (const item of arr) {
    result = result || fn(item);
  }
  return result;
};

export const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

export const once = (fn) => {
  let done = false;
  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

export const memoized = (fn) => {
  const lockupTable = {};
  return (arg) => lockupTable[arg] || (lockupTable[arg] = fn(arg));
};

export const map = (arr, fn) => {
  res = [];
  for (const value of arr) {
    res.push(fn(value));
  }

  return res;
};

export const partial = function (fn, ...partialArgs) {
  let args = partialArgs;
  return function (...fullArgs) {
    let arg = 0;
    for (
      let index = 0;
      index < args.length && index < fullArgs.length;
      index++
    ) {
      if (args[index] === undefined) {
        args[index] = fullArgs[arg++];
      }
    }
    return fn.apply(null, args);
  };
};

export const reduce = (arr, fn, initValue) => {
  let accumlator;
  if (initValue != undefined) {
    accumlator = initValue;
  } else {
    accumlator = arr[0];
  }
  if (initValue === undefined) {
    for (let index = 0; index < arr.length; index++) {
      accumlator = fn(accumlator, arr[index]);
    }
  } else {
    for (const value of arr) {
      accumlator = fn(accumlator, value);
    }
  }
  return accumlator;
};

export const compose = (...fns) => {
  return (value) => {
    return reduce(fns.reverse(), (acc, fn) => fn(acc), value);
  };
};

export const pipe = (...fns) => {
  return (value) => {
    return reduce(fns, (acc, fn) => fn(acc), value);
  };
};

export const tap = (it) => {
  console.log(it);
  return it;
};

export class Container {
  constructor(value) {
    this.value = value;
  }
  map(fn) {
    return new Container(fn(this.value));
  }
}

export class MayBe {
  constructor(value) {
    this.value = value;
  }
  map(fn) {
    return  new Container(this.isNothing()? null:fn(this.value));
  }
  isNothing() {
    return this.value === null || this.value === undefined;
  }
}
