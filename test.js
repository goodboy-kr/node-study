var users = [{ name: 'a', age: 10 }, { name: 'b', age: 20 }, { name: 'c', age: 30 }, { name: 'd', age: 40 }];

console.log("length : %d",users.length);
console.dir(users);

var users2= users.slice(1,3);
console.log("2")
console.dir(users2);


var users3 = users2.slice(1);
console.log("3")
console.dir(users3);
