var ladders = [{ id: 1, height: 20 }, { id: 3, height: 25 }];
var criteria = { height: 20 };

function findWhere(array, criteria) {
  var criteriaValue = Object.keys(criteria)[0];

  return array.find(function(obj) {
    return obj[criteriaValue] === criteria[criteriaValue];
  });
}

var ladder = findWhere(ladders, criteria);
console.log('Ladders: ' + JSON.stringify(ladders));
console.log('Ladder: ' + JSON.stringify(ladder));
