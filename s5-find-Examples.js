var users = [
  { name: 'Jill', id: 1 },
  { name: 'Alex', id: 2 },
  { name: 'Bill', id: 3 },
  { name: 'Alex', id: 4 },
];
var user;

// =================================================
// Eaxample-1.1:
console.log('--- Example-1.1: ---');
for (i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}
console.log('Users-1.1: ' + JSON.stringify(users));
console.log('User-1.1: ' + JSON.stringify(user));

// =================================================
// Eaxample-1.2:
console.log('--- Example-1.2: ---');
var user2 = users.find(function(user) {
  return user.name === 'Alex';
});
console.log('Users-1.2: ' + JSON.stringify(users));
console.log('User-1.2: ' + JSON.stringify(user2));

// =================================================
// Eaxample-2:
console.log('--- Example-2: ---');
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
  new Car('Toyota'),
];

var foundCar = cars.find(function(car) {
  return car.model === 'Focus';
});
console.log('Cars-2: ' + JSON.stringify(cars));
console.log('Car-2: ' + JSON.stringify(foundCar));

// =================================================
// Eaxample-3:
console.log('--- Example-3: ---');
var posts = [{ id: 1, title: 'New Post' }, { id: 2, title: 'Old Post' }];
var comment = { postId: 1, content: 'Great Post!' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}
var foundPost = postForComment(posts, comment);
console.log('Posts-3: ' + JSON.stringify(posts));
console.log('Comment-3: ' + JSON.stringify(comment));
console.log('FoundPost-3: ' + JSON.stringify(foundPost));
