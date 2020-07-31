//path ¼±¾ð

var path = require('path');

var filename = "C:\\Users\\llaayy\\notepad.exe"
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('directory : %s, file name : %s, basename : %s',dirname,basename,extname);




//path join
var path = require('path');

var directories =["users", "mike", "docs"];
var docDirectory = directories.join(path.sep);
console.log('doc directory : %s', docDirectory);
var curpath =path.join('/Users/llaayy', 'notepad.exe');
console.log('file path : %s',curpath);