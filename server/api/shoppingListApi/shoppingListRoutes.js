// shoppingListRoutes.js
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

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
  addItemToShoppingListAbl,
} = require("../../abl/shoppingListAbl/addItemToShoppingListAbl");
const {
  removeItemFromShoppingListAbl,
} = require("../../abl/shoppingListAbl/removeItemFromShoppingListAbl");
// Route to get all shopping lists
router.get("/", async (req, res) => {
  try {
    const shoppingLists = await getAllShoppingLists();
    res.json(shoppingLists);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/shopping-list/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Ensure the id is an integer
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

router.post("/shopping-list", (req, res) => {
  try {
    const newList = createShoppingList(req.body);
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Route to add an item to a shopping list
router.post("/shopping-list/:id/items", async (req, res) => {
  try {
    const shoppingListId = parseInt(req.params.id);
    const item = req.body;

    console.log(shoppingListId);
    const addedItem = await addItemToShoppingListAbl(shoppingListId, item);
    res.status(201).json(addedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to remove an item from a shopping list
router.delete("/shopping-list/:listId/items/:itemId", async (req, res) => {
  try {
    const { listId, itemId } = req.params;
    const removedItem = await removeItemFromShoppingListAbl(listId, itemId);
    res.json(removedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
