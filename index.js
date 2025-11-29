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
import Transaction from "./schemas/transactions.schema.js";
import Certificate from "./schemas/certificate.schema.js";
import Target from "./schemas/target.Schema.js";
import Upgrade from "./schemas/upgrades.schema.js";
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
  Ticket,
  Transaction,
  Target,
  Certificate,
  Upgrade,
};
