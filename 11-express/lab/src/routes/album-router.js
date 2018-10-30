
import express from 'express';
import Album from '../models/album.js';
import {request} from 'https';
const router = new express.Router();

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

let serverError = (res,err) => {
  let error = { error:err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};

router.get('/api/v1/albums', (req,res) => {
  if ( req.query.id ) {
    Album.findOne(req.query.id)
      .then( data => sendJSON(res,data) )
      .catch( err => serverError(res,err) );
  }
  else {
    Album.fetchAll()
      .then( data => sendJSON(res,data) )
      .catch( err => serverError(res,err) );
  }
});

router.delete('/api/v1/albums', (req,res) => {
  if ( req.query.id ) {
    Album.deleteOne(req.query.id)
      .then( success => {
        let data = {id:req.query.id,deleted:success};
        sendJSON(res,data);
      })
      .catch(console.error);
  }
});

router.post('/api/v1/albums', (req,res) => {
  console.log(req.body);
  let record = new Album (req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(console.error);
});

export default router;
