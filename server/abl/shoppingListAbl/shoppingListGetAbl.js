const shoppingListDao = require("../../dao/shoppingListDao/shoppingListDao");

async function getShoppingListById(id) {
  //   console.log(id);
  try {
    // Use the correct method from your DAO.
    return await shoppingListDao.getShoppingListById(id);
  } catch (error) {
    console.error(error);
    throw new Error(`Error retrieving shopping list: ${error.message}`);
  }
}

module.exports = { getShoppingListById };
