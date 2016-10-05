var http = require('http');
var concatStream = require('concat-stream');

var urls = [ process.argv[2], process.argv[3], process.argv[4] ];
var result = [],
    counter = 0;

function printResult(){
  for (i = 0; i < urls.length; i++){
    console.log(result[i]);
  };
};

function httpGet (index){
  http.get(urls[index], function(response){
    response.setEncoding('utf8');
    response.pipe(concatStream (function (data){
      result[index] = data;
      counter++;

      if (counter === urls.length){
        printResult();
      };
    }));
  });
};

for (var i = 0; i < urls.length; i++){
  httpGet(i);
};
