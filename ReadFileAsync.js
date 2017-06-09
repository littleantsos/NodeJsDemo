var fs = require('fs');

fs.readFile('ceshi.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log('end');