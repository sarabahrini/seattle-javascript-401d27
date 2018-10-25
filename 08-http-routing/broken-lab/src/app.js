'use strict';

let http = require('http');

const router = require('./lib/router.js');
const api = require('./api/api.js');

let isRunning = false;

const app = http.createServer( router.routes );

module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port ,(err) => {
        isRunning = true;
        console.log('Serer is up on port', port);
      });
    }
    else {
      console.log('server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};