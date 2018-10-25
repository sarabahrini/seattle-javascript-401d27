'use strict';

require('dotenv').config();

require('./src/app.js').start(process.env.PORT);

//line from lab07(might not be needed)
Server.start(process.env.PORT,() => console.log(`Server up on ${process.env.PORT}`))