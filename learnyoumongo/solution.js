var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

// var updateUrl = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function (err, db) {
  // NOTE: if the connection is refused then throw and error
  if (err) throw err;

  // NOTE: find in collection parrots
  // var parrots = db.collection('parrots');
  // var age = process.argv[2];
  // parrots.find({
  //   age: {
  //     $gt: +age
  //   }
  // },{
  //     name: 1,
  //     age: 1,
  //     _id: 0
  // }).toArray(function (err, docs) {
  //   if (err) throw err;
  //   console.log(docs);
  //   db.close();
  // });

  // NOTE: insert in collection
  // var firstName = process.argv[2];
  // var lastName = process.argv[3];
  // var collection = db.collection('users');
  // var doc = {
  //   firstName: firstName,
  //   lastName: lastName
  // };
  // collection.insert(doc, function (err, data) {
  //   if (err) throw err;
  //   console.log(JSON.stringify(doc));
  //   db.close();
  // });

  // NOTE: update a document
  // var collection = db.collection('users');
  // collection.update({
  //   username: 'tinatime'
  // },{
  //   $set:{
  //     age: 40
  //   }
  // }, function (err) {
  //   if (err) throw err;
  //   db.close();
  // });

  // NOTE: remove a document
  // var collection = db.collection(process.argv[3]);
  // collection.remove({
  //   _id: process.argv[4]
  // }, function (err) {
  //   if (err) throw err;
  //   db.close();
  // });

  // NOTE: to count
  // var collection = db.collection('parrots');
  // var age = process.argv[2];
  // collection.count({
  //   age:{
  //     $gt: +age
  //   }
  // }, function (err, count) {
  //     if (err) throw err;
  //     console.log(count);
  //     db.close();
  //   });

  // NOTE: aggregate
  var collection = db.collection('prices');
  var size = process.argv[2];
  collection.aggregate([{
    $match:{
      size: size
    }
  }, {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }]).toArray(function (err, results) {
    if (err) throw err;
    if (!results.length){
      throw new Error ('No results found');
    }
    var o = results[0];
    console.log(Number(o.average).toFixed(2));
    db.close();
  });
});
