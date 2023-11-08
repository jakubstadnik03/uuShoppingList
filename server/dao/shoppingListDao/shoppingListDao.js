const shoppingLists = require("../../test/mockData/mockShoppingLists");
const { randomUUID } = require("crypto");

function getShoppingListById(shoppingListId) {
  const list = shoppingLists.find((list) => list.id === shoppingListId);
  return list;
}

function getAllShoppingLists() {
  return shoppingLists;
}

function createShoppingList(newList) {
  // Ensure the new list has the same structure as your example
  const newShoppingList = {
    id: randomUUID(), // Generates a unique ID
    title: newList.title,
    description: newList.description,
    created_by: newList.created_by,
    items: newList.items || [], // Default to an empty array if no items provided
    members: newList.members || [], // Default to an empty array if no members provided
    archived: newList.archived || false, // Default to false if not specified
  };
  console.log(newShoppingList);

  shoppingLists.push(newShoppingList);
  return newShoppingList;
}
function deleteShoppingList(shoppingListId) {
  const index = shoppingLists.findIndex((list) => list.id === shoppingListId);
  if (index > -1) {
    shoppingLists.splice(index, 1);
    return true;
  }
  return false;
}
function addItemToList(shoppingListId, item) {
  const list = shoppingLists.find((list) => list.id === shoppingListId);
  if (list) {
    // Give the item a unique ID
    const newItem = item;
    list.items.push(newItem);
    return newItem;
  }
  throw new Error(`ShoppingList with ID ${shoppingListId} not found.`);
}
async function updateShoppingList(shoppingListId, updatedShoppingList) {
  // Find the index of the shopping list to update
  const index = shoppingLists.findIndex((list) => list.id === shoppingListId);
  if (index === -1) {
    throw new Error("Shopping list not found.");
  }

  // Update the shopping list at the found index
  shoppingLists[index] = updatedShoppingList;

  // Here you would typically also persist the change to the database or other storage
  // For the mock, we just return the updated list
  return updatedShoppingList;
}

function removeItemFromList(shoppingListId, itemId) {
  const list = shoppingLists.find((list) => list.id === shoppingListId);
  if (list) {
    const itemIndex = list.items.findIndex((item) => item.id === itemId);
    if (itemIndex > -1) {
      // Remove the item from the list
      return list.items.splice(itemIndex, 1)[0]; // Returns the removed item
    }
    throw new Error(
      `Item with ID ${itemId} not found in ShoppingList with ID ${shoppingListId}.`
    );
  }
  throw new Error(`ShoppingList with ID ${shoppingListId} not found.`);
}

module.exports = {
  getShoppingListById,
  getAllShoppingLists,
  createShoppingList,
  deleteShoppingList,
  addItemToList,
  removeItemFromList,
  updateShoppingList,
};
