const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const indexRouter = require('./routes/index');
const GOOGLE_CLIENT_ID = '67105133250-dvoaea2go6nh81b6vdvaqtu73067schl.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const app = express();
const session = require('express-session');

// This is here for our client side to be able to talk to our server side. you may want to be less permissive in production and define specific domains.
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    // here you can create a user in the database if you want to
    return done(null, profile);
  }
));
module.exports = app;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));
