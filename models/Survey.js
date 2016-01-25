// requiring mongoose
var mongoose = require('mongoose');



var SurveySchema = new mongoose.Schema ({
  name: String,
  age: String,
  gender: String,
  software: [String],
  otherSoftware: String,
  features: String,
  wantedFeatures: String


});


// exporting model and specify SurveySchema
module.exports = mongoose.model('Survey', SurveySchema);
