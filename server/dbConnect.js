module.exports = function() {
  const mongoose = require("mongoose");
  var url = 'mongodb+srv://arsalanazmi:arsalanazmi123@cluster0-sjumi.mongodb.net/test?retryWrites=true&w=majority';
  
  mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true });
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
  db.once('open', function () {
    
    console.log('Mongodb CONNECTION OPENED!!')
    return db;
  });  
}
