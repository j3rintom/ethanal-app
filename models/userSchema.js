import mongoose from "mongoose";

const userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  blood_group: {
    type: String,
  },
});

const UserSchema = mongoose.model("UserSchema", userschema);

export default UserSchema;
