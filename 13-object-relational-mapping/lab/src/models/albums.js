import mongoose, { Schema } from 'mongoose'; 

//Album Schema
const albumSchema = new Schema({
  title: String,
  location: String,
  season: String,
});


//Album Model
const Album = mongoose.model('Albums', albumSchema);

export default Album;