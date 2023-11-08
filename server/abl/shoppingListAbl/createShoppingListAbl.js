// createShoppingListAbl.js

const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function createShoppingList(shoppingListData) {
  try {
    // Add validation logic if needed
    // This will attempt to create a shopping list and return the result
    return await shoppingListDao.createShoppingList(shoppingListData);
  } catch (error) {
    // Log the error to console for debugging purposes
    console.error("Error in createShoppingList ABL:", error);
    // Rethrow the error or throw a new error with more details
    throw new Error(`Error creating shopping list: ${error.message}`);
  }
}

module.exports = { createShoppingList };
