const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    rollno: {
      type: String,
      required: [true, "please add yuour rollno. Don't worry we won't share it ;) "],
    },
    confession: {
      type: String,
      required: [true, "Don't be shy, confess your feelings"],
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
