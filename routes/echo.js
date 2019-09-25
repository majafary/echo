var express = require('express');
var router = express.Router();

const https = require('https');

/* Handle health check Get Request for api */
router.get('/health-check', function(req, res, next){
  console.log("OK");
  res.status(200).json({
    message: 'OK'
  });
});


/* Handle health check Get Request for api */
router.get('/echo', function(req, res, next){
  console.log(req.body);
  res.send(req.body);
});
module.exports = router;