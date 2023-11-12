const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    email: { type: String, unique: true },
    passwordHash: String,
    shopping_lists: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ShoppingList" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
