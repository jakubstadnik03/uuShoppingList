// shoppingListRoutes.js
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const {
  shoppingListValidationRules,
  validateShoppingList,
  shoppingListUpdateValidationRules,
  validateShoppingListForUpdate,
} = require("../../middleware/validationMiddleware");
const { isOwner, isMember } = require("../../middleware/authMiddleware");
// Import ABL functions
const {
  createShoppingList,
} = require("../../abl/shoppingListAbl/createShoppingListAbl");
const {
  getShoppingListById,
} = require("../../abl/shoppingListAbl/shoppingListGetAbl");
const {
  getAllShoppingLists,
} = require("../../abl/shoppingListAbl/shoppingListGetAllAbl");
const {
  deleteShoppingList,
} = require("../../abl/shoppingListAbl/deleteShoppingListAbl");
const {
  updateShoppingList,
} = require("../../abl/shoppingListAbl/updateShoppingListAbl");
const {
  addItemToShoppingListAbl,
} = require("../../abl/shoppingListAbl/addItemToShoppingListAbl");
const {
  removeItemFromShoppingListAbl,
} = require("../../abl/shoppingListAbl/removeItemFromShoppingListAbl");
const {
  checkItemInShoppingListAbl,
} = require("../../abl/shoppingListAbl/checkItemInShoppingLitAbl");
const {
  archiveShoppingListAbl,
} = require("../../abl/shoppingListAbl/archiveShoppingListAbl");

// Route to get all shopping lists
router.get("/", async (req, res) => {
  try {
    const shoppingLists = await getAllShoppingLists();
    res.json(shoppingLists);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/shopping-list/:id", isMember, async (req, res) => {
  try {
    const id = req.params.id.toString(); // Ensure the id is an integer
    const shoppingList = await getShoppingListById(id);
    if (shoppingList) {
      res.json(shoppingList);
    } else {
      res.status(404).send("Shopping list not found");
    }
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    res.status(500).send(error.message);
  }
});

router.post("/shopping-list", async (req, res) => {
  const userId = req.user.id;
  const userName = req.user.name;

  try {
    const newList = await createShoppingList(req.body, userId, userName);
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/shopping-list/:id", isOwner, async (req, res) => {
  try {
    const listId = req.params.id.toString();
    const wasDeleted = await deleteShoppingList(listId);

    if (wasDeleted) {
      res.status(200).json({ success: true }); // 204 No Content is often used for successful DELETE operations
    } else {
      res.status(404).json({ error: "Shopping list not found." }); // If the item wasn't found and thus not deleted
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.put(
  "/shopping-list/:id",
  shoppingListUpdateValidationRules(),
  validateShoppingListForUpdate,
  isOwner,
  async (req, res) => {
    try {
      const listId = req.params.id;
      const shoppingListData = req.body;
      const updatedList = await updateShoppingList(listId, shoppingListData);
      res.json(updatedList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
router.get("/shopping-list/:id/archive", isOwner, async (req, res) => {
  try {
    const listId = req.params.id;
    const updatedList = await archiveShoppingListAbl(listId);
    res.json(updatedList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route to add an item to a shopping list
router.post("/shopping-list/:id/addItem", isMember, async (req, res) => {
  try {
    const shoppingListId = req.params.id.toString();
    const item = req.body;

    const addedItem = await addItemToShoppingListAbl(shoppingListId, item);
    res.status(201).json(addedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to remove an item from a shopping list
router.delete(
  "/shopping-list/:id/removeItem/:itemId",
  isMember,
  async (req, res) => {
    try {
      const { id, itemId } = req.params;
      const removedItem = await removeItemFromShoppingListAbl(id, itemId);
      res.json(removedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
router.get(
  "/shopping-list/:id/checkItem/:itemId",
  isMember,
  async (req, res) => {
    try {
      const { id, itemId } = req.params;
      console.log(req.params);
      const checkedItem = await checkItemInShoppingListAbl(id, itemId);
      res.json(checkedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
