// Solution-1
function unique(array) {
  var uniqueValues = array.reduce(function(previous, value) {
    var found = previous.find(function(previousValue) {
      return value === previousValue;
    });

    if (!found) {
      previous.push(value);
    }

    return previous;
  }, []);

  return uniqueValues;
}

// Solution-2
function unique2(array) {
  return array.reduce(function(acc, number) {
    acc.find(previousValue => number === previousValue)
      ? acc
      : acc.push(number);
    return acc;
  }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];
console.log('--- Solution-1: ---');
console.log('Initial Numbers: ' + numbers);
console.log('Unique numbers: ' + unique(numbers));

console.log('--- Solution-2: ---');
console.log('Initial Numbers: ' + numbers);
console.log('Unique numbers: ' + unique2(numbers));
