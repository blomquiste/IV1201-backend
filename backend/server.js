'use strict';
const SERVER_PORT = 8000;
const path = require('path');
const APP_ROOT_DIR = path.join(__dirname, '..');

const express = require('express');
const app = express();
//app.use(express.static(path.join(APP_ROOT_DIR, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());



app.get('/', (req, res) => {
  return res.send('hello from group 16');
});



const loginRoute = require('./src/api')
app.use(loginRoute);

/*app.post('/login', async (req, res) => {
  return res.send(userJson);
})

'/login', */

const server = app.listen(
  //process.env.SERVER_PORT,
  SERVER_PORT,
  process.env.SERVER_HOST,
  () => {
    console.log(`Server started at ${server.address().address}:${server.address().port}`,);
  },
);

module.exports = server, app; // Needed for tests.