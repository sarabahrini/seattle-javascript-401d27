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

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

module.exports = Album;
