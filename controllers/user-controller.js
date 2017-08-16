const express = require('express');
const router = express.Router();

const data = require('../models/data.js');

router.get('/:id', function(req, res){
  var user = data.users[req.params.id - 1];
  res.render('user-profile', user);
});

module.exports = router;