const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  amountPaid: { type: Number, default: 0 },
  dueDate: { type: Date, required: true },
});

module.exports = mongoose.model("Credit", creditSchema);
