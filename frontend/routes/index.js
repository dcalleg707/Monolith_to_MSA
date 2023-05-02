var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get("http://localhost:3002/api/locations/")
    .then((data) => {
      res.render('index', {bicis: data['data']})
    })
    .catch((err) => {
      res.redirect("/bicicletas")
    })
});

router.get('/auth/google', function (req, res, next) {
  res.redirect("http://localhost:3005/auth/google")
});

module.exports = router;
