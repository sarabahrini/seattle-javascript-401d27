'use strict';

require('dotenv').config();

require('babel-register');

const mongoose = require('mongoose');

const options ={
  useNewUrlParser: true,
  useCreatIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MONGODB_URI, options);

require('./src/server.js').start(process.env.PORT);