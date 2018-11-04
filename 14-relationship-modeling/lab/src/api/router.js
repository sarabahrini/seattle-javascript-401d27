'use strict';

import express from 'express';
import albums from '../models/albums.js';

const router = express.Router();

let sendJSON = (data,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

router.get('/api/v1/albums', (req,res,next) => {
  albums.find()
  .then( output =>  sendJSON (output, res) )
  .catch( next );
});

router.get('/api/v1/albums/:id', (req,res,next) => {
  const id = req.params.id;
  albums.findById(id)
  .then( result => sendJSON(result, res) )
  .catch( next );
});

router.post('/api/v1/albums', (req,res,next) => {
  const body = req.body;
  albums.create(body)
  .then( result =>  sendJSON(result,res) )
    // console.log(result))
  .catch( next );
});

router.put('/api/v1/albums/:id', (req,res,next) => {
const body = req.body;
const id = req.params.id;
const updateOptions = {
  new: true,
};

albums.findByIdAndUpdate(id,body,updateOptions)
.then( result => sendJSON(result, res) )
.catch( next );
});

router.patch('/api/v1/albums/:id', (req,res,next) => {
const body = req.body;
const id = req.params.id;
const updateOptions = {
  new: true,
};

  albums.findByIdAndUpdate(id,body,updateOptions)
  .then ( result => sendJSON(result,res) )
  .catch( next );
});

router.delete('/api/v1/albums/:id',(req,res,next) => {
  const id = req.params.id;
  albums.findByIdAndDelete(id)
  .then( result => sendJSON(result,res) )
  .catch( next );
});

export default router;

