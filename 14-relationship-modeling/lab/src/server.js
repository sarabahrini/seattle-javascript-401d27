'use strict';
import express from 'express';
import cors from 'cors';


import router from './api/serve.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
// import apiRouter from './api/router.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

app.use(notFound);
app.use(errorHandler);

let serverUp = false;

module.exports = {
 app,
  start: (port) => {
    if( !serverUp ) {
      serverUp = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log(`Server Up on ${port}`);
      });
    }
    else{
      console.log('Server is already running');
    }
  },
  stop:() => {
    serverUp.close( () => {
      console.log('Server has been stopped');
    });
  },
};
