function fact(x) {
  if (x == 1 || x == 0) {
    return 1;
  } else {
    return x * fact(x - 1);
  }
}
function isSpecialNumber(n) {
  var sum = 0;
  var y = n;
  while (y > 0) {
    sum += fact(y % 10);
    y = parseInt(y / 10);
  }

  return sum == n ? 1 : 0;
}

console.log(isSpecialNumber(145));
