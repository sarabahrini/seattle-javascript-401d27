'use strict';

require('dotenv').config();

require('./server/src/app.js').start(process.env.PORT);
