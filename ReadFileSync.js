var fs = require('fs');

var data = fs.readFileSync('ceshi.txt');

console.log(data.toString());
console.log('end');