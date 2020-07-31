var calc = require('./calc');
var calc2 = require('./calc2');


console.log('after module : %d', calc.add(10, 10));

console.log('calc2 add : %d', calc2.add(10,30));
console.log('calc2 multiply : %d', calc2.multiply(10,30));