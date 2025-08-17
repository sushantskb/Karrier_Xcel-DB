import mongoose from "mongoose";

const kycSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  accountHolderName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  ifscCode: {
    type: String,
    required: true,
  },
  identificationProof: {
    type: String,
    required: true,
  },
  adharCard: {
    type: String,
    required: true,
  },
});

const Kyc = mongoose.model("Kyc", kycSchema);

export default Kyc;
