var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

// Eaxample-1.1:
console.log('--- Example-1.1: ---');

var filteredProducts = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
console.log('Products-1.1: ' + JSON.stringify(products));
console.log('FilteredProducts-1.1:  ' + JSON.stringify(filteredProducts));
// =================================================
// Eaxample-2.1:
console.log('--- Example-2.1: ---');
var filteredProducts2 = products.filter(function(product) {
  return product.type === 'fruit';
});
console.log('Products-2.1: ' + JSON.stringify(products));
console.log('FilteredProducts-2.1:  ' + JSON.stringify(filteredProducts2));

// =================================================
// Eaxample-3:
console.log('--- Example-3: ---');
// Type === 'vegetable', quantity > 0, price < 10
var filteredProducts3 = products.filter(function(product) {
  return (
    product.type === 'vegetable' && product.quantity > 0 && product.price < 10
  );
});
console.log('Products-3: ' + JSON.stringify(products));
console.log('FilteredProducts-3:  ' + JSON.stringify(filteredProducts3));

// =================================================
// Eaxample-4:
console.log('--- Example-4: ---');
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'Awesome post!' },
  { postId: 3, content: 'I was OK...' },
  { postId: 4, content: 'Neat ;-)' },
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

console.log('Posts: ' + JSON.stringify(post));
console.log('Comments: ' + JSON.stringify(comments));
console.log(
  'FilteredComments:  ' + JSON.stringify(commentsForPost(post, comments))
);
