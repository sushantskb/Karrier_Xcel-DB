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
      activeIncome: {
        total: { type: Number, default: 0 },
        today: { type: Number, default: 0 },
        thisWeek: { type: Number, default: 0 },
        thisMonth: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now },
      },
      passiveIncome: {
        total: { type: Number, default: 0 },
        today: { type: Number, default: 0 },
        thisWeek: { type: Number, default: 0 },
        thisMonth: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now },
      },
    },
    investment: {
      type: Number,
      default: 0,
    },

    totalEarnings: {
      type: Number,
      default: 0,
      lastUpdated: { type: Date, default: Date.now },
    },
    totalEarningsTrack: {
      type: Date,
      default: Date.now,
    },
    enrolledPackages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
    },
    upline: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
    isRegisterd: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
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
