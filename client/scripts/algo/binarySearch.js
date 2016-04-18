export default function binarySearch(searchKey, entryArr) {

  let i = 0,
      j = entryArr.length,
      k

  while(i < j) {
    k = Math.floor((i + j) / 2)
    if(searchKey <= entryArr[k]) {
      j = k
    }else {
      i = k + 1
    }
  }
  let result;
  if(entryArr[i] === searchKey) {
    result = i
  }else {
    result = -1
  }
  return result
}
