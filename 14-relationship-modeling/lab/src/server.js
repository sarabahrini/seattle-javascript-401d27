'use strict';
import express from 'express';
import cors from 'cors';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import apiRouter from './api/router.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(apiRouter);

app.use(notFound);
app.use(errorHandler);

let isRunning = false;

module.exports = {
  server: app,
  start: (port) => {
    if( !isRunning ) {
      app.listen(port, () =>{
        isRunning = true;
        console.log(`Server Up on ${port}`);
      });
    }
    else{
      console.log('Serer is already running');
    }
  },
};
