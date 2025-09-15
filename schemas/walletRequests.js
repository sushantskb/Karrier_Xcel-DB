import mongoose from "mongoose";

const walletRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  isPaid: {
    type: Boolean,
    default: false
  }
});

const WalletRequest = mongoose.model("WalletRequest", walletRequestSchema);

export default WalletRequest;
