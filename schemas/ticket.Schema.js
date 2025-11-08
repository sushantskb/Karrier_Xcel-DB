import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    typeOfIssue: {
      type: String,
      enum: [
        "courses_access",
        "payment_issue",
        "login_problem",
        "certificate_delay",
        "other",
      ],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
