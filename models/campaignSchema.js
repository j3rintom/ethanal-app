import mongoose from "mongoose";

const { model, Schema } = mongoose;

const campaignSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  coverImage: {
    type: String,
  },
});

const Campaign = model("Campaign", campaignSchema);

export { Campaign };
