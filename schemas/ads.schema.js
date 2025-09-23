import mongoose from "mongoose";

const adsSchema = new mongoose.Schema(
  {
    adImg: {
      type: String,
      required: true,
    },
    announcemt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ads = mongoose.model("Ads", adsSchema);

export default Ads;
