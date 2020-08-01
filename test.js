function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var history = function () {
        return a + ' + ' + b + ' = ' + result;
    };
    return history;
}


 var x = add(11,22,function(R){
    console.log('parameter callbacked');
    console.log('add(11,22) result : %d', R);
});

console.log('final answer : ' + x())