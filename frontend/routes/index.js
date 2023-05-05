var express = require('express');
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get(process.env.LOCATIONS_URL + "/api/locations/")
    .then((data) => {
      res.render('index', {bicis: data['data']})
    })
    .catch((err) => {
      res.render('index', {bicis: []})
    })
});

router.get('/auth/google', function (req, res, next) {
  res.redirect(process.env.AUTH_URL + "/auth/google")
});

module.exports = router;
