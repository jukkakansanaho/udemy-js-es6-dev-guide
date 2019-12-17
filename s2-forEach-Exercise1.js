// Old way:
console.log('--- OLD WAY: ---');
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' },
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}

// ES6 way:
console.log('--- ES6 WAY: ---');
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' },
  ];
  function handler(post) {
    savePost(posts[post]);
  }
  posts.forEach(handler);
}
