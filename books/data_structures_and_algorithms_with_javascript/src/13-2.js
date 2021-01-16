const readline = require('readline');

function seqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

function dispArr(arr) {
  for (var i = 0; i < arr.length; ++i) {
    putstr(arr[i] + " ");
    if (i % 10 == 9) {
      putstr('\n');
    }

  }
  if (i % 10 != 0) {
    putstr('\n');
  }
}
var nums = [];
for (let i = 0; i < 100; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
putstr('Enter a number to search for...\n');
var num = parseInt(readline());
console.log();
if (seqSearch(nums, num)) {
  console.log(num + ' is in th array.');
} else {
  console.log(num + 'is not in the array.');
}
console.log();
dispArr(nums);