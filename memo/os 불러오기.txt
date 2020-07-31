
const { required } = require("nconf");

var os=require('os');

console.log('system\'s host name : %s',os.hostname());
console.log('system\'s memory : %d / %d',os.freemem(), os.totalmem());
console.log('system\'s cpu \n');
console.dir(os.cpus());
console.log('system\'s network interface \n');
console.dir(os.networkInterfaces());