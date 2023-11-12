// updateShoppingListAbl.js

const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function updateShoppingList(shoppingListId, shoppingListData) {
  try {
    // Add validation logic if needed
    // Check if the shopping list exists
    const existingList = await shoppingListDao.getShoppingListById(
      shoppingListId
    );
    if (!existingList) {
      throw new Error(`Shopping list with ID ${shoppingListId} not found.`);
    }

    // Merge existing data with new data
    const updatedData = {
      ...existingList,
      ...shoppingListData,
    };

    // This will attempt to update a shopping list and return the result
    return await shoppingListDao.updateShoppingList(
      shoppingListId,
      updatedData
    );
  } catch (error) {
    // Log the error to console for debugging purposes
    console.error("Error in updateShoppingList ABL:", error);
    // Rethrow the error or throw a new error with more details
    throw new Error(`Error updating shopping list: ${error.message}`);
  }
}

module.exports = { updateShoppingList };
