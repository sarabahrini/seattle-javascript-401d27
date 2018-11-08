'use strict';

import express from 'express';
import User from './model.js';
import auth from './middleware.js';

const router = express.Router();



router.post('/signup', (request, response, next)=> {

  let user = new User(req.body);
  user.save().then((user) => response.send(user.generateToken())).catch(next);
});


router.post('/signin', (request, response, next) => {
  response.cookie('Token, request.token');
  response.send(request.token);
});

router.get('/signin', auth, (request, response) => {
  response.send(request.token);
});

router.post('/signup', async (request, response) => {

  try {

    const user = await User.create(request.body);
    const token = user.generateToken();
    response.send(token);
   

  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;