// createShoppingListAbl.js
const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");
const mockUsers = require("../../test/mockData/mockUsers"); // Assuming you have this path correct

async function createShoppingList(shoppingListData, userId, userName) {
  try {
    // Filter and validate members against mockUsers
    const validatedMembers = (shoppingListData.members || [])
      .filter((member) => member.id && member.name)
      .filter((member) => mockUsers.some((user) => user.id === member.id));

    // Create a member object for the owner if they are a valid user
    const owner = mockUsers.find((user) => user.id === userId);
    if (!owner) {
      throw new Error("Owner is not a valid user.");
    }
    const ownerMember = {
      id: owner.id,
      name: owner.name + " " + owner.surname, // Assuming you want the full name
    };

    // Check if the owner is already included in the members array
    const ownerIsMember = validatedMembers.some(
      (member) => member.id === userId
    );
    if (!ownerIsMember) {
      validatedMembers.push(ownerMember);
    }

    // Construct the new list with the owner as the creator and the validated members
    const newListData = {
      ...shoppingListData,
      created_by: ownerMember, // Set the owner as the creator
      members: validatedMembers, // Include the validated members only
    };

    // Create the shopping list using the DAO
    const newShoppingList = await shoppingListDao.createShoppingList(
      newListData
    );
    return newShoppingList;
  } catch (error) {
    console.error("Error in createShoppingList ABL:", error);
    throw new Error(`Error creating shopping list: ${error.message}`);
  }
}

module.exports = { createShoppingList };
