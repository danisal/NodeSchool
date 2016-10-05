var total = 0;
for (var i = 2; i < process.argv.length; i++){
  // console.log("adding: " + process.argv[i]);
  total += Number(process.argv[i]);
};
console.log(total);
