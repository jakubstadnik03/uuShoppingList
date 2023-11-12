const shoppingLists = require("../../test/mockData/mockShoppingLists");
const { randomUUID } = require("crypto");

function getShoppingListById(shoppingListId) {
  // Convert both to string to ensure correct comparison
  const idToFind = shoppingListId.toString();
  const list = shoppingLists.find(
    (list) => list.id.toString() === idToFind.toString()
  );
  return list;
}
function getAllShoppingLists() {
  return shoppingLists;
}

function createShoppingList(newList, userId, userName) {
  // Create a member object for the owner
  const ownerMember = {
    id: userId,
    name: userName,
  };

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
  const ownerIsMember = newShoppingList.members.some(
    (member) => member.id === userId
  );
  if (!ownerIsMember) {
    newShoppingList.members.push(ownerMember);
  }

  console.log(newShoppingList);

  // Here you would typically insert the newShoppingList into the database
  shoppingLists.push(newShoppingList);
  return newShoppingList;
}

function deleteShoppingList(shoppingListId) {
  const index = shoppingLists.findIndex(
    (list) => list.id.toString() === shoppingListId.toString()
  );
  if (index > -1) {
    shoppingLists.splice(index, 1);
    return true;
  }
  return false;
}
function addItemToList(shoppingListId, item) {
  const list = shoppingLists.find(
    (list) => list.id.toString() === shoppingListId.toString()
  );
  if (list) {
    // Give the item a unique ID
    const newItem = item;
    list.items.push(newItem);
    return newItem;
  }
  throw new Error(`ShoppingList with ID ${shoppingListId} not found.`);
}
async function updateShoppingList(listId, updatedListData) {
  const idToFind = listId.toString();
  const index = shoppingLists.findIndex(
    (list) => list.id.toString() === idToFind
  );

  if (index === -1) {
    throw new Error("Shopping list not found.");
  }

  // Merge existing data with new data
  shoppingLists[index] = {
    ...shoppingLists[index],
    ...updatedListData,
  };

  return shoppingLists[index];
}
function removeItemFromList(shoppingListId, itemId) {
  const list = shoppingLists.find(
    (list) => list.id.toString() === shoppingListId.toString()
  );
  if (list) {
    const itemIndex = list.items.findIndex(
      (item) => item.id.toString() === itemId.toString()
    );
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
