require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const expressHandlebars = require('express-handlebars');
const MemoryStore = session.MemoryStore;
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const passport = require('passport');
const ForceDotComStrategy = require('passport-forcedotcom').Strategy;
const app = express();
const GTMConfigs = require("./lib/configs/gtm");

// Our port the application will listen on.
const PORT = process.env.PORT || 8080;
let sessionOpts;

if (process.env.LOCAL_DEV === 'true') {
  winston.info('LOCAL_DEV true setting session to MemoryStore');
  sessionOpts = {
    saveUninitialized: false, // saved new sessions
    resave: false, // do not automatically write to the session store
    store: new MemoryStore(),
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      maxAge: 1800000,
    },
  };
  process.env.AUTH_REQUIRED = false;
} else {
  winston.info('LOCAL_DEV false setting session to RedisStore');
  winston.info('Connecting to Redis :'+process.env.REDIS_URL);
  let client = redis.createClient(process.env.REDIS_URL);
  client.on('error', (err) => {
    winston.info('Connecting to Redis error:'+err);
    console.log(`Redis${err}`);
  });
  sessionOpts = {
    saveUninitialized: false, // saved new sessions
    resave: false, // do not automatically write to the session store
    store: new RedisStore({
      client,
    }),
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      maxAge: 1800000,
    },
  };
}

app.use(morgan('dev'));
app.use(session(sessionOpts));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const handlebars = expressHandlebars.create({});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'lib/public')));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const sfStrategy = new ForceDotComStrategy({
  clientID: process.env.CF_CLIENT_ID,
  clientSecret: process.env.CF_CLIENT_SECRET,
  callbackURL: process.env.CF_CALLBACK_URL,
  authorizationURL: process.env.SF_AUTHORIZE_URL,
  tokenURL: process.env.SF_TOKEN_URL,
  profileFields: ['user_id', 'first_name'],
}, (accessToken, refreshToken, profile, done) => {
    // Only retain the profile properties we need.
  profile.user_id = profile._raw.user_id;
  delete profile._raw;// eslint-disable no-underscore-dangle
  delete profile.displayName;
  delete profile.name;
  delete profile.emails;

  return done(null, profile);
});

passport.use(sfStrategy);
app.use(passport.initialize());
app.use(passport.session());

require('./lib/routes')(app, express);


const ensureAuthenticated = (req, res, next) => {
  winston.info('In ensureAuthenticated');
    // If the user is already authenticated or AUTH is not required - skip
  if (req.isAuthenticated() || process.env.AUTH_REQUIRED === 'false' || isValidExternalUser(req)) {
    winston.info('User authenticated going to next');
    return next();
  }
  winston.info('User not authenticated going to redirect /auth/forcedotcom');
  if(req.originalUrl.indexOf('?') > 0) {
    req.session.qstr = req.originalUrl.substring(req.originalUrl.indexOf('?'),req.originalUrl.length);
    req.originalUrl = req.originalUrl.substring(0,req.originalUrl.indexOf('?'));
    winston.info('User not authenticated query str :'+req.session.qstr);
    winston.info('User not authenticated orig url :'+req.originalUrl);
  }
  return res.redirect(`/auth/forcedotcom?redirect=${req.originalUrl}`);
};

app.get('/auth/forcedotcom', (req, res, next) => {
  winston.info('User not authenticated in /auth/forcedotcom :'+req.query.redirect);
  if (req.query.redirect) {
    req.session.authRedirect = req.query.redirect;
  }
  passport.authenticate('forcedotcom')(req, res, next);
});

app.get('/auth/forcedotcom/callback', passport.authenticate('forcedotcom', {
  failureRedirect: '/error',
}), (req, res) => {
  winston.info('User not authenticated in /auth/forcedotcom/callback :');
  const redirect = req.session.authRedirect;
  let querystring;
  if(req.session.qstr){
    querystring = req.session.qstr;
    delete req.session.qstr;
  }
  if (redirect) {
    delete req.session.authRedirect;
  }
  if(querystring != undefined) {
    winston.info('User not authenticated in /auth/forcedotcom/callback redirecting to:'+redirect+querystring);
    res.redirect(303, redirect+querystring || '/');
  }else {
    res.redirect(303, redirect || '/');
  }
});

app.get('*', ensureAuthenticated, (req, res) => {
  return res.render('index', {
    layout: false,
    gtmContainerId: GTMConfigs.CONTAINER_ID
  });
});

app.get('/', (req, res) => {
  winston.info('User authenticated / :');
  if ((!req.user) && (process.env.AUTH_REQUIRED === 'true')) {
    if (isValidExternalUser(req)) {
      return res.render('index', {layout: false});
    }
    req.session.destroy();
    req.logout();
    return res.redirect('/auth/forcedotcom');
  }
  return res.render('index', {layout: false});
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  return res.render('logout');
});

app.set('trust proxy', 1); // trust first proxy

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});

function isValidExternalUser (req) {
  const EXTERNAL_ACCESS = process.env.EXTERNAL_ACCESS;
  const externalIPs = process.env.IP_ADDR.split(',');
  const refinedExternalIPsIp = externalIPs.map((s) => { return s.trim(); });
  const ip = req.headers['x-forwarded-for'];

  if (EXTERNAL_ACCESS === 'true' && refinedExternalIPsIp.indexOf(ip) >= 0) {
    winston.info('isValidExternalUser true :');
    return true;
  }
  winston.info('isValidExternalUser false :');
  return false;
}