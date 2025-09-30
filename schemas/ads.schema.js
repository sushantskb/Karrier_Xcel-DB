import mongoose from "mongoose";

const adsSchema = new mongoose.Schema(
  {
    adImg: {
      type: String
    },
    announcemt: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const Ads = mongoose.model("Ads", adsSchema);

export default Ads;
