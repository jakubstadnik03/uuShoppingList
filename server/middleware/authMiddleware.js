const mockUsers = require("../test/mockData/mockUsers");
const shoppingLists = require("../test/mockData/mockShoppingLists");

const isOwner = (req, res, next) => {
  const userId = req.user.id; // The ID of the currently authenticated user
  const listId = req.params.id; // The ID of the shopping list to be deleted

  // Find the shopping list by ID
  const shoppingList = shoppingLists.find(
    (list) => list.id.toString() === listId
  );

  if (!shoppingList) {
    return res.status(404).json({ message: "Shopping list not found." });
  }

  if (shoppingList.created_by.id !== userId) {
    return res.status(403).json({
      message: "Access denied. You are not the owner of this shopping list.",
    });
  }

  next();
};

const isMember = (req, res, next) => {
  const userId = req.user.id;
  const listId = req.params.id;

  console.log("Looking for list with ID:", listId);
  console.log(
    "Current shopping lists:",
    JSON.stringify(shoppingLists, null, 2)
  );

  const shoppingList = shoppingLists.find(
    (list) => list.id.toString() === listId
  );

  if (!shoppingList) {
    console.log("Shopping list not found:", listId);
    return res.status(404).json({ message: "Shopping list not found." });
  }

  const isMember = shoppingList.members.some((member) => member.id === userId);
  if (!isMember && shoppingList.created_by.id !== userId) {
    console.log("User is not a member or owner of the list:", userId);
    return res.status(403).json({
      message: "Access denied. User is not a member of the shopping list.",
    });
  }

  next();
};

module.exports = { isOwner, isMember };
