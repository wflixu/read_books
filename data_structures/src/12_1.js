function setData() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function clear() {
  for (let i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element;
}

function toString() {
  var retstr = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    retstr += this.dataStore[i] + ' ';
    if (i > 0 && i % 20 == 0) {
      retstr += '\n';
    }
  }
  return retstr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (let outer = numElements; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
    // console.log(this.toString());
  }
}

function selectionSort() {
  var min, temp;
  for (let outer = 0; outer < this.dataStore.length - 1; outer++) {
    min = outer;
    for (let inner = outer + 1; inner < this.dataStore.length; inner++) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min);
    // console.log(this.toString());
  }
}

function insertSort() {
  var temp, inner;
  for (let outer = 0; outer < this.dataStore.length; outer++) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && this.dataStore[inner - 1] >= temp) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
    // console.log(this.toString());
  }
}

function shellsort() {
  for (let g = 0; g < this.gaps.length; g++) {
    for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
    console.log(this.toString());
  }
}

function shellsort1() {
  var N = this.dataStore.length;
  var h = 1;
  while (h < N / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
        swap(this.dataStore, j, j - h);
      }
    }
    h = (h - 1) / 3;
  }

}

function setGaps(arr) {
  this.gaps = arr;
}

function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.gaps = [5, 3, 1];
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.setGaps = setGaps;
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertSort = insertSort;
  this.shellsort = shellsort;
  this.shellsort1 = shellsort1;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}

// var numElements = 1000;
// var myNums = new CArray(numElements);
// myNums.setData();
// // console.log(myNums.toString());
// console.log('*******************\n');

// // myNums.bubbleSort();
// // myNums.selectionSort();
// // myNums.insertSort();
// var start = new Date().getTime();
// // myNums.bubbleSort();
// // myNums.selectionSort();
// myNums.insertSort();
// var stop = new Date().getTime();
// var elapsed = stop - start;

// console.log('elaspsed tim for the selection sort on ' + numElements + ' elements is:' + elapsed + ' milliseconds.');
// // console.log(myNums.toString());

var nums = new CArray(100);
nums.setData();
console.log('Before Shellsort:\n');
console.log(nums.toString());
console.log('\nDuring Shellsort:\n');
nums.shellsort1();
console.log('\n After Shellsort:\n');
console.log(nums.toString());