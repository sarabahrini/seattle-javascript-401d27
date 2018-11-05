import mongoose, { Schema } from 'mongoose'; 

//Album Schema
const albumSchema = new Schema({
  title: String,
  location: {type: Schema.Types.ObjectId,  ref: 'Locations'},
  season: String,
});




albumSchema.pre('findOne', function (next) {
  this.populate('locations');
  next();
});

// //Album Model
export default mongoose.model('Albums', albumSchema);


