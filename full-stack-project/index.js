

 'use strict';

 require('dotenv').config();

//const routes = require('./src/routes.js')

 require('./src/server.js').start(process.env.PORT);
