const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");
const { randomUUID } = require("crypto");

async function addItemToShoppingListAbl(shoppingListId, itemData) {
  try {
    // Validate itemData
    if (!itemData.name) {
      throw new Error("Item name is required.");
    }

    // Get the existing shopping list
    const shoppingList = await shoppingListDao.getShoppingListById(
      shoppingListId
    );
    if (!shoppingList) {
      throw new Error("Shopping list not found.");
    }

    // Create a new item with a unique ID and the provided data
    const newItem = {
      id: randomUUID(), // Generates a unique identifier for the new item
      name: itemData.name,
      checked: false, // Default value for a new item
    };

    // Add the new item to the list
    shoppingList.items.push(newItem);

    // Persist the updated list through the DAO
    await shoppingListDao.updateShoppingList(shoppingListId, shoppingList);

    return newItem;
  } catch (error) {
    console.error(error);
    throw new Error(`Error adding item to shopping list: ${error.message}`);
  }
}

module.exports = { addItemToShoppingListAbl };
