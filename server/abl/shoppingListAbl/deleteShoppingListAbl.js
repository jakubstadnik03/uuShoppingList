// deleteShoppingListAbl.js

const ShoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

class DeleteShoppingListAbl {
  async deleteShoppingList(id) {
    try {
      // Validation and deletion logic goes here
      return await shoppingListDao.deleteShoppingList(id);
    } catch (error) {
      throw new Error("Error deleting shopping list");
    }
  }
}

module.exports = DeleteShoppingListAbl;
