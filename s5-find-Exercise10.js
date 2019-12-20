var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function(account) {
  return account.balance === 12;
});

console.log('Accounts: ' + JSON.stringify(accounts));
console.log('Account: ' + JSON.stringify(account));
