var numbers = [1, 2, 3, 4, 5, 6, 7];

var result = numbers.find(function (currentValue, currentIndex, arr) {
  return currentValue > 4;
}, this);

console.log(result);
console.log(numbers);
