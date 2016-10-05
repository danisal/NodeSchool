var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function (err, contents){
  var newLines = contents.toString().split('\n').length - 1;
  console.log(newLines);
});
