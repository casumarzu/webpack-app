export default function linearSearch(t, A) {
  let n = A.length,
      i = 0
  A[n] = t
  while (A[i] !== t) {
    i++
  }
  let result
  if (i < n) {
    result = i
  }else {
    result = -1
  }
  return result
}
