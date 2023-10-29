"use strict";
const ShoppingListAbl = require("../../abl/shopping-list-abl.js");

class ShoppingListController {
  init(ucEnv) {
    return ShoppingListAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return ShoppingListAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return ShoppingListAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new ShoppingListController();
