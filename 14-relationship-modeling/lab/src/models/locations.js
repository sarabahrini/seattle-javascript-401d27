'use strict';
import mongoose from ('mongoose'); 

//Location Schema
const locationSchema = mongoose.Schema({
  locationName: String,
});

export default mongoose.model('Locations', locationSchema);


