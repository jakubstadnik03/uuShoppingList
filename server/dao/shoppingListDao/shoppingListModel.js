const mongoose = require("mongoose");

const shoppingListSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdBy: {
    id: Number,
    name: String,
  },
  items: [
    {
      name: String,
      checked: Boolean,
    },
  ],
  members: [
    {
      id: Number,
      name: String,
    },
  ],
  archived: Boolean,
});

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

module.exports = ShoppingList;
