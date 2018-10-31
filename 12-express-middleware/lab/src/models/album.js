'use strict';


import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

class Album{

  
  constructor(title, location) {
    this.id = uuid();
    this.createdOn = new Date();
    
    this.title = title;
    // this.title = config && config.title || '';
    // this.location = config && config.location || '';
    this.location =location ;
  }


  save() {
    return storage.save(this);
  }


  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

//lab 12
  static updateOne(id, title, location) {
    console.log('MADE IT TO STATIC UPDATE');
    console.log(id);
    return storage.update(id);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }


}

module.exports = Album;
