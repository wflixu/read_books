function seqSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == data) {
      return true;
    }
  }
  return false;
}