function pluck(array, property) {
  var properties = [];
  return (properties = array.map(function(obj) {
    return obj[property];
  }));
}

console.log('--- Exercise-5: ---');
var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
console.log('Paints: ' + JSON.stringify(paints));
console.log('Colors: ' + pluck(paints, 'color'));
