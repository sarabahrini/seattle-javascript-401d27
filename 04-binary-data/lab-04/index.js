'use strict';

const Bitmap = require('./lib/bitmap.js');
const transformWithCallbacks = require('./lib/transform.js');

const[file,operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transformWithCallbacks(file, operation, bitmap);