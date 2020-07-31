var answer = 0;
console.time('duration_sum');

for (var i = 1; i <= 1; i++) {
    answer = answer + i;
}

console.timeEnd('duration_sum');
console.log('answer : %d', answer)
console.log(answer)

console.log('file name : %s ', __filename);
console.log('dir name : %s ', __dirname);

var person = {name : "GG", age : 20}
console.dir(person)
console.log(person)
console.dir(10)
