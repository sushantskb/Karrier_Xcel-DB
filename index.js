import dotenv from "dotenv";

dotenv.config();
import User from "./schemas/user.schema.js";
import Kyc from "./schemas/kyc.schema.js";

import connectDB from "./db.js";

connectDB();
export { connectDB, User, Kyc };
