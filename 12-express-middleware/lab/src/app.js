
import express from 'express';
// import albumRouter from './routes/albums.js';

import album from './routes/album-router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(album);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Running on', port));
  }
}



