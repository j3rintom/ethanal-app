import mongoose from "mongoose"

const userschema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bgroup: String
});


const UserSchema = mongoose.model('UserSchema',userschema)

export default UserSchema