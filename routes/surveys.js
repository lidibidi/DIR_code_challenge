
var express = require('express');
var router = express.Router();
var model = require('../models/Survey');

/* GET to get all of the surveys */
router.get('/responses', function(req, res, next) {
  model.find(function(err, surveys) {
    if (err) console.log(err);
    res.json(surveys);
    })
});

/* POST to make a new entry. */
router.post('/create', function(req, res, next) {
  console.log(req.body); //log out all surveys
  model.create(req.body, function(err, survey) {
    if (err) console.log(err);
    res.redirect("/surveycomplete")
  })
});

/* GET response by id */
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, survey) {
    if (err) console.log(err);
    res.json(survey);
    })
});


/* UPDATE response by id */
router.put('/:id', function(req, res) {
  console.log(req.params);
  model.findByIdAndUpdate(req.params.id, req.params, function(err, survey) {
    if (err) console.log(err);
    res.json({"Message": "You succesfully updated your survey"});
  });

});

router.patch('/:id', function(req, res) {
  console.log(req.body);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, survey) {
    if (err) console.log(+ err);
    res.json({"Message": "You succesfully updated your survey"});
  });

});


/* DELETE response by id */

router.delete('/:id', function(req, res) {
  console.log(req.body);
  model.findByIdAndRemove(req.params.id, req.params, function(err, survey) {
      if (err) console.log(err);
      res.json({"Message": "Your survey was deleted"});
  });

});


module.exports = router;
