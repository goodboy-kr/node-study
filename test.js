var users = [{ name: 'sosi', age: 20 }, { name: 'girls day', age: 23 }];


var add = function (a, b) { return a + b }


users.push(add)
users.push(add)
users.push(add)

console.log('users : %d', users.length);
console.log('user add: %d', users[2](10, 10));

console.log('%d', users[2](10, 20))
console.log('%d', users[3](30, 40))
console.log('%d', users[4](50, 60))