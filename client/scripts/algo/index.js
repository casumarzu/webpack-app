export function binarySearch(searchKey, entryArr) {

  let i = 0,
      j = entryArr.length,
      k
  console.time('binarySearch')
  while(i < j) {
    k = Math.floor((i + j) / 2)
    if(searchKey <= entryArr[k]) {
      j = k
    }else {
      i = k + 1
    }
  }
  if(entryArr[i] === searchKey) {
    console.timeEnd('binarySearch')
    return i
  }else {
    console.timeEnd('binarySearch')
    return -1
  }
}

export function linearSearch(t, A) {
  let n = A.length,
      i = 0
  console.time('linearSearch')
  A[n] = t
  while (A[i] !== t) {
    i++
  }
  if (i < n) {
    console.timeEnd('linearSearch')
    return i
  }else {
    console.timeEnd('linearSearch')
    return -1
  }
}

export function SubstringSearch(sub, str) {
  var i, j, n = sub.length,
  N = str.length - n + 1;

  for (i = 0; i < N; i++){
    j = 0;
    while (j < n && sub.charAt(j) === str.charAt(i+j)) j++;
    if (j === n) return i;
  }
  return -1;
}
