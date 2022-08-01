import mongoose from "mongoose";

const { model, Schema } = mongoose;

const bloodbankSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Bloodbank = model("Bloodbank", bloodbankSchema);

export { Bloodbank };
