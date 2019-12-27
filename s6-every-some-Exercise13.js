var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
];

var inProgress = requests.some(function(request) {
  return request.status === 'pending';
});

console.log('Network requests inProgress: ' + inProgress);
