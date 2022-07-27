import { Campaign } from "../models/campaignSchema.js";

const getCampaigns = async (query) => {
  try {
    const campaigns = await Campaign.find({}).lean().exec();
    return { campaigns, success: true };
  } catch (e) {
    console.log(e);
    return { error: e, success: false };
  }
};

const addCampaign = async ({ title, description, date, time, coverImage }) => {
  try {
    const newCampaign = new Campaign({
      title,
      description,
      date,
      time,
      coverImage,
    });
    await newCampaign.save();
    return { newCampaign, success: true };
  } catch (e) {
    console.log(e);
    return { error: e, success: false };
  }
};

export { getCampaigns, addCampaign };
