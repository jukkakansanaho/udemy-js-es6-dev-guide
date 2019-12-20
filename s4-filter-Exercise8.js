function reject(array, iteratorFunction) {
  return array.filter(e => !iteratorFunction(e));
}

console.log('--- Exercise-8: ---');
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});
console.log('Numbers: ' + numbers);
console.log('LessThanFifteen: ' + lessThanFifteen);
