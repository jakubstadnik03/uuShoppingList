// deleteShoppingListAbl.js

const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function deleteShoppingList(id) {
  try {
    // Validation and deletion logic goes here
    return await shoppingListDao.deleteShoppingList(id);
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error("Error deleting shopping list");
  }
}

module.exports = { deleteShoppingList };
