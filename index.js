import dotenv from "dotenv";

dotenv.config();
import User from "./schemas/user.schema.js";
import Kyc from "./schemas/kyc.schema.js";
import Otp from "./schemas/otp.schema.js";
import Package from "./schemas/package.schema.js";
import Request from "./schemas/request.schema.js";
import WalletRequest from "./schemas/walletRequests.js";
import Course from "./schemas/course.schema.js";
import Ads from "./schemas/ads.schema.js";
import Ticket from "./schemas/ticket.Schema.js";
import connectDB from "./db.js";

connectDB();
export {
  connectDB,
  User,
  Kyc,
  Otp,
  Package,
  Request,
  WalletRequest,
  Course,
  Ads,
  Ticket
};
