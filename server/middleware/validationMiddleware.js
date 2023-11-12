const { body, validationResult } = require("express-validator");

const shoppingListValidationRules = () => {
  return [
    body("title").trim().notEmpty().withMessage("Title is required"),

    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string"),

    body("items").isArray().withMessage("Items must be an array"),
    body("items.*.id").notEmpty().withMessage("Item ID is required"),
    body("items.*.name").notEmpty().withMessage("Item name is required"),
    body("items.*.checked")
      .isBoolean()
      .withMessage("Item checked must be a boolean"),

    body("members").isArray().withMessage("Members must be an array"),
    body("members.*.id").notEmpty().withMessage("Member ID is required"),
    body("members.*.name").notEmpty().withMessage("Member name is required"),

    body("archived")
      .optional()
      .isBoolean()
      .withMessage("Archived must be a boolean"),
  ];
};
const shoppingListUpdateValidationRules = () => {
  return [
    body("title")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Title cannot be empty"),

    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string"),

    body("created_by")
      .optional()
      .isObject()
      .withMessage("Created by must be an object"),
    body("created_by.id")
      .optional()
      .notEmpty()
      .withMessage("Creator ID cannot be empty"),
    body("created_by.name")
      .optional()
      .notEmpty()
      .withMessage("Creator name cannot be empty"),

    body("items").optional().isArray().withMessage("Items must be an array"),
    body("items.*.id")
      .optional()
      .notEmpty()
      .withMessage("Item ID cannot be empty"),
    body("items.*.name")
      .optional()
      .notEmpty()
      .withMessage("Item name cannot be empty"),
    body("items.*.checked")
      .optional()
      .isBoolean()
      .withMessage("Item checked must be a boolean"),

    body("members")
      .optional()
      .isArray()
      .withMessage("Members must be an array"),
    body("members.*.id")
      .optional()
      .notEmpty()
      .withMessage("Member ID cannot be empty"),
    body("members.*.name")
      .optional()
      .notEmpty()
      .withMessage("Member name cannot be empty"),

    body("archived")
      .optional()
      .isBoolean()
      .withMessage("Archived must be a boolean"),
  ];
};

const validateShoppingListForUpdate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateShoppingList = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  shoppingListValidationRules,
  validateShoppingList,
  validateShoppingListForUpdate,
  shoppingListUpdateValidationRules,
};
