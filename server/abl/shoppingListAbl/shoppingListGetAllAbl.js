const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function getAllShoppingLists() {
  try {
    // Validation logic goes here
    return await shoppingListDao.getAllShoppingLists();
  } catch (error) {
    throw new Error("Error getting all shopping lists");
  }
}

module.exports = { getAllShoppingLists };
