function shellsort() {
  for (let g = 0; g < this.gaps.length; g++) {
    for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
      var temp = this.dataStore[i];
      for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}

function setGaps(arr) {
  this.gaps = arr;
}