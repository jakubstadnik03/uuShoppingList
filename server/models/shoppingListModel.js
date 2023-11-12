const mongoose = require("mongoose");

const shoppingListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    created_by: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: String,
    },
    items: [
      {
        name: String,
        checked: { type: Boolean, default: false },
      },
    ],
    members: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
      },
    ],
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

module.exports = ShoppingList;
