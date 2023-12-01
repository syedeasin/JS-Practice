var numbers = [1, 2, 344, 3, 2, 34, 54];
var result = numbers.filter((currentValue, index, arr) => {
  return currentValue > 4;
});

console.log(result);
console.log(numbers);
