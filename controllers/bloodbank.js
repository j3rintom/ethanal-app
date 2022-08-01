import { Bloodbank } from "../models/bloodbankSchema.js";

const getBloodbanks = async (query) => {
  try {
    const bloodbankData = await Bloodbank.find(query).lean().exec();
    return { bloodbankData, success: true };
  } catch (e) {
    console.log(e);
    return { error: e, success: false };
  }
};

const addBloodbank = async (data) => {
  try {
    const newBloodbankData = new Bloodbank(data);
    await newBloodbankData.save();
    return { newBloodbankData, success: true };
  } catch (e) {
    console.log(e);
    return { error: e, success: false };
  }
};

export { getBloodbanks, addBloodbank };
