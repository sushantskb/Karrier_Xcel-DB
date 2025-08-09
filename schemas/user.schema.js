import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
    phoneNo: {
      type: String,
    },
    alternateNo: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    sponsorCode: {
      type: String,
    },
    wallet: {
      passiveIncome: {
        type: Number,
        default: 0,
      },
      activeIncome: {
        type: Number,
        default: 0,
      },
    },
    investment: {
      type: Number,
      default: 0,
    },
    enrolledPackages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
    },
    associates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    kyc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kyc",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
