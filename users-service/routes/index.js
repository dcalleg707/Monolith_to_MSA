const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});
router.get('/auth/check', (req, res, next) => {
  
 passport.authenticate('jwt', { session: false }, (err, user, info) => {
   if (err) {
     console.log('error is', err);
     res.status(500).send('An error has occurred, we cannot greet you at the moment.');
   }
   else {
    console.log(user)
    console.log(info)
     res.send({ success: true, fullName: `${user.name.givenName} ${user.name.familyName}` })
   }
 })(req, res, next);
});

router.get('/auth/google', function (req, res, next) {
  res.redirect("http://localhost:3000/auth/google")
});



module.exports = router;