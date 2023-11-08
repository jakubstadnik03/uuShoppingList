const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function removeItemFromShoppingListAbl(shoppingListId, itemId) {
  try {
    // Get the existing shopping list
    const shoppingList = await shoppingListDao.getShoppingListById(
      shoppingListId
    );
    if (!shoppingList) {
      throw new Error("Shopping list not found.");
    }

    // Find the index of the item to be removed
    const itemIndex = shoppingList.items.findIndex(
      (item) => item.id === itemId
    );
    if (itemIndex === -1) {
      throw new Error("Item not found in shopping list.");
    }

    // Remove the item from the list
    shoppingList.items.splice(itemIndex, 1);

    // Persist the updated list through the DAO
    await shoppingListDao.updateShoppingList(shoppingListId, shoppingList);

    return { success: true };
  } catch (error) {
    console.error(error);
    throw new Error(`Error removing item from shopping list: ${error.message}`);
  }
}

module.exports = { removeItemFromShoppingListAbl };
