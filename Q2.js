function cube(x) {
  return Math.pow(x, 3);
}

function isAmstrong(n) {
  var y = n;
  var sum = 0;
  while (y > 0) {
    sum += cube(y % 10);
    y = parseInt(y / 10);
  }
  return sum == n ? 1 : 0;
}
console.log(isAmstrong(0));
console.log(isAmstrong(1));
console.log(isAmstrong(153));
console.log(isAmstrong(370));
console.log(isAmstrong(371));
console.log(isAmstrong(407));
console.log(isAmstrong(22));
