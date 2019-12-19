var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
});

console.log('--- Exercise-3: ---');
console.log('Images: ' + JSON.stringify(images));
console.log('Heights: ' + heights);
