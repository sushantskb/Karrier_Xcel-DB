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
  adhaarCard: {
    type: String,
    required: true,
  },
  bankPassBook: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  isVerified: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

const Kyc = mongoose.model("Kyc", kycSchema);

export default Kyc;
