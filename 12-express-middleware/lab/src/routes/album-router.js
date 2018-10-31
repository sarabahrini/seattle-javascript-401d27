
import express from 'express';
import Album from '../models/album.js';
import {request} from 'https';
import { read } from 'fs';
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
      .catch( err => { 
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.setHeader('Content-Type', 'application/json');
        res.write( JSON.stringify(err) );
        res.end();

      });
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
        res.statusCode = 204;
        res.statusMessage = 'OK';
        res.setHeader('Content-Type', 'application/json');
        res.write( JSON.stringify(data) );
        res.end();;
      })
      .catch(console.error);
  }
});

router.post('/api/v1/albums', (req,res) => {
  console.log(req.body);
  
  if(Object.keys(req.body).length === 0){
        res.statusCode = 400;
        res.statusMessage = 'Bad Request';
        res.setHeader('Content-Type', 'application/json');
        res.write( JSON.stringify(error) );
        res.end();
  };

  let record = new Album (req.body);
  record.save()
    .then(data => {sendJSON(res,data)})
    .catch(console.error);
});

/// new code for  lab12
router.put('/api/v1/albums', (req,res) => {
  console.log('MADE IT TO PUT ROUTER');
  // console.log(req.query.id, 'ID');
  console.log(req.query.title, 'TITLE');

 Album.updateOne(req.query.id, req.query.title, req.query.location)
    //replace the body with the new body
  //save

});

export default router;
