const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');

const app = express();

app.use(
  cookieSession({ name: 'session', keys: ['lebo'], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credential: true,
  })
);

app.listen('5000', () => {
  console.log('Backend server is running on port 5000');
});
