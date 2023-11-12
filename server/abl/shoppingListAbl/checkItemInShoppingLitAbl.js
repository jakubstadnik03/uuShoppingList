// ABL: checkItemInShoppingListAbl.js
const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function checkItemInShoppingListAbl(listId, itemId) {
  try {
    // Get the existing shopping list
    const shoppingList = await shoppingListDao.getShoppingListById(listId);
    console.log("Retrieved Shopping List:", shoppingList);
    if (!shoppingList) {
      throw new Error("Shopping list not found.");
    }

    // Ensure shoppingList.items is an array
    if (!Array.isArray(shoppingList.items)) {
      throw new Error("The items property is not an array.");
    }

    // Find the item to check

    const itemIndex = shoppingList.items.findIndex(
      (item) => item.id.toString() === itemId.toString()
    );

    console.log("Item Index:", itemIndex);
    if (itemIndex === -1) {
      throw new Error("Item not found.");
    }

    // Check the item
    shoppingList.items[itemIndex].checked = true;

    // Persist the updated list
    await shoppingListDao.updateShoppingList(listId, shoppingList);

    console.log("Updated Item:", shoppingList.items[itemIndex]);
    return shoppingList.items[itemIndex];
  } catch (error) {
    console.error("Error in checkItemInShoppingListAbl:", error);
    throw error;
  }
}

module.exports = { checkItemInShoppingListAbl };
