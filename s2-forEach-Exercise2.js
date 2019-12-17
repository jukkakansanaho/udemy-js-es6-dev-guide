// ES6 way:
console.log('--- ES6 WAY: ---');
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];
var areas = [];

function calculateArea(image) {
  areas.push(image.height * image.width);
}

images.forEach(calculateArea);

console.log('Images: ' + JSON.stringify(images));
console.log('Areas:' + areas);
