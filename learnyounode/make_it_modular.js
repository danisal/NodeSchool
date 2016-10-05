var filteredDir = require('./filter_dir');
var dirPath = process.argv[2];
var extension = process.argv[3];

filteredDir(dirPath, extension, function (err, list){
  if (err) return console.log(err);

  list.forEach(function (filename){
    console.log(filename);
  });
});
