function time (func, args = [], ctx = this) {
  var now = Date.now();
  func.apply(ctx, args);
  console.log(Date.now() - now);
}

var shit = [];

function hardCalc () {
  for(var i = 0; i < 99999999; i++) {
    shit.push({'name': Math.pow(i, 2)})
  }
}

export default function arrChange (arr) {

  // time(hardCalc)


  arr = arr.map(function (item) {
    return Math.pow(item, 2);
  });
  return arr;
}
