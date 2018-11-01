PORT=3000

require('babel-register');

require('./server.js').start(process.env.PORT);