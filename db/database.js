var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/surveyapp';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('Survey is ready!');
});

mongoose.connection.on('error', function(err){
  console.log(err);
});

mongoose.connection.on('disconnected', function(){
  console.log('Survey is not ready');
});
