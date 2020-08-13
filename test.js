function add(a, b, callback) {
    var result = a + b;
    callback(result)

    var count = 0;
    var history = function () {
        count++;
        console.log("count in add : " + count)
        return count + ':' + a + '+' + b + '=' + result;
    };
    return history
}

var add_history = add(10, 10, function (result) {
    console.log('parameter callback function called');
    console.log('add (10, 10) result : %d', result);
});

console.log('answer : ' + add_history());
console.log('answer : ' + add_history());
console.log('answer : ' + add_history());

console.log("end")
add(10, 10, function (x) {console.log(x)})()
add(10, 10, function (x) {console.log(x)})()
add(10, 10, function (x) {console.log(x)})()