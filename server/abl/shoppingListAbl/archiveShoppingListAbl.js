const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function archiveShoppingListAbl(listId) {
  try {
    // Get the existing shopping list
    const shoppingList = await shoppingListDao.getShoppingListById(listId);
    if (!shoppingList) {
      throw new Error("Shopping list not found.");
    }

    // Toggle the archive status
    shoppingList.archived = !shoppingList.archived;

    // Persist the updated list
    await shoppingListDao.updateShoppingList(listId, shoppingList);

    console.log("Shopping List archived status updated:", shoppingList);
    return shoppingList;
  } catch (error) {
    console.error("Error in archiveShoppingListAbl:", error);
    throw error;
  }
}

module.exports = { archiveShoppingListAbl };
