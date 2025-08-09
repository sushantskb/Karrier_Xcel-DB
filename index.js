import dotenv from "dotenv";

dotenv.config();
import User from "./schemas/user.schema.js";
import Kyc from "./schemas/kyc.schema.js";
import Otp from "./schemas/otp.schema.js";
import Package from "./schemas/package.schema.js";
import connectDB from "./db.js";

connectDB();
export { connectDB, User, Kyc, Otp, Package };
