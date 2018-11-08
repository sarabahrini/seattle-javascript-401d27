import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password,10);
});

userSchema.statics.authenticate = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

userSchema.methods.generateToken = function() {
  return jwt.sign({id:this._id}, process.env.APP_SECRET);
};



export default mongoose.model('User', userSchema);
