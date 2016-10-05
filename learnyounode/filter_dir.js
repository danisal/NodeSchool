var fs = require ('fs');
var path = require ('path');

module.exports = function (dirPath, extension, callback){
  var filteredFiles = [];

  fs.readdir(dirPath, function (err, filesList){
    if (err) return callback(err);

    filesList.forEach(function (file){
      if (path.extname(file) === '.' + extension){
        filteredFiles.push(file);
      }
    });

    callback(null, filteredFiles);

  });
};
