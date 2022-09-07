const temp = {
  val: 0,
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: temp.val++,
          done: temp.val > 10,
        };
      },
    };
  },
};

for (const value of temp) {
  console.log(value)
}
