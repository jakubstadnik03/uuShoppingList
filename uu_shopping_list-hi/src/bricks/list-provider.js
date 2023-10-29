//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";

let shoppingLists = [
  {
    id: 1,
    title: "Nákup na víkend",
    description: "Tento seznam je určený pro potraviny, který mi vystačí na víkend",
    ownerId: 1,
    items: [
      { name: "Vajíčka", checked: true },
      { name: "paprika", checked: false },
      { name: "okurka", checked: true },
      { name: "máslo", checked: false },
      { name: "pepř", checked: true },
    ],
  },
  {
    id: 2,
    title: "Groceries for the Week",
    description: "A shopping list for a week's worth of groceries",
    ownerId: 2,
    items: [
      { name: "Apples", checked: false },
      { name: "Bread", checked: false },
      { name: "Milk", checked: false },
      { name: "Cheese", checked: false },
      { name: "Tomatoes", checked: false },
    ],
  },
  {
    id: 3,
    title: "Home Improvement",
    description: "List of items for home improvement",
    ownerId: 3,
    items: [
      { name: "Paint", checked: false },
      { name: "Brushes", checked: false },
      { name: "Nails", checked: false },
      { name: "Hammer", checked: false },
      { name: "Screws", checked: false },
    ],
  },
  {
    id: 4,
    title: "Holiday Shopping",
    description: "Shopping list for holiday gifts",
    ownerId: 4,
    items: [
      { name: "Gift 1", checked: false },
      { name: "Gift 2", checked: false },
      { name: "Gift 3", checked: false },
      { name: "Gift 4", checked: false },
      { name: "Gift 5", checked: false },
    ],
  },
  {
    id: 5,
    title: "Office Supplies",
    description: "Supplies for the office",
    ownerId: 1,
    items: [
      { name: "Notepads", checked: false },
      { name: "Pens", checked: false },
      { name: "Printer Paper", checked: false },
      { name: "Stapler", checked: false },
      { name: "Folders", checked: false },
    ],
  },
  {
    id: 6,
    title: "Pet Store",
    description: "Shopping for pet supplies",
    ownerId: 2,
    items: [
      { name: "Dog Food", checked: true },
      { name: "Cat Litter", checked: false },
      { name: "Toys", checked: false },
      { name: "Leash", checked: false },
      { name: "Pet Shampoo", checked: false },
    ],
  },
  {
    id: 7,
    title: "Gardening",
    description: "Shopping list for gardening tools",
    ownerId: 3,
    items: [
      { name: "Shovel", checked: false },
      { name: "Gloves", checked: false },
      { name: "Seeds", checked: false },
      { name: "Hose", checked: false },
      { name: "Pots", checked: false },
    ],
  },
  {
    id: 8,
    title: "Electronics Store",
    description: "Shopping for electronics",
    ownerId: 4,
    items: [
      { name: "Laptop", checked: false },
      { name: "Smartphone", checked: false },
      { name: "Headphones", checked: false },
      { name: "Tablet", checked: false },
      { name: "Chargers", checked: false },
    ],
  },
  {
    id: 9,
    title: "Toiletries",
    description: "List of toiletries and personal care items",
    ownerId: 1,
    items: [
      { name: "Shampoo", checked: false },
      { name: "Toothbrush", checked: false },
      { name: "Soap", checked: false },
      { name: "Deodorant", checked: false },
      { name: "Towels", checked: false },
    ],
  },
  {
    id: 133,
    title: "Clothing Shopping",
    description: "Shopping for new clothes",
    ownerId: 2,
    items: [
      { name: "Shirts", checked: false },
      { name: "Jeans", checked: false },
      { name: "Shoes", checked: false },
      { name: "Dresses", checked: false },
      { name: "Socks", checked: false },
    ],
  },
  // Add more shopping lists as needed
];
// let shoppingList = [
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c01')",
//     name: "Nákup na víkend",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b16')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b16')"],
//     items: [
//       { name: "Vajíčka", completed: true },
//       { name: "paprika", completed: false },
//       { name: "okurka", completed: true },
//       { name: "máslo", completed: false },
//       { name: "pepř", completed: true },
//     ],
//     created_at: "2023-10-27T00:00:00Z",
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c02')",
//     name: "Groceries for the Week",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b17')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b17')"],
//     items: [
//       { name: "Apples", completed: false },
//       { name: "Bread", completed: false },
//       { name: "Milk", completed: false },
//       { name: "Cheese", completed: false },
//       { name: "Tomatoes", completed: false },
//     ],
//     created_at: "2023-10-26T00:00:00Z",
//   },
// {
//   _id: "ObjectId('6178a5b4f98abc1290ef4c03')",
//   name: "Home Improvement",
//   created_by: "ObjectId('6178a5b4f98abc1290ef4b18')",
//   members: ["ObjectId('6178a5b4f98abc1290ef4b18')"],
//   items: [
//     { name: "Paint", completed: false },
//     { name: "Brushes", completed: false },
//     { name: "Nails", completed: false },
//     { name: "Hammer", completed: false },
//     { name: "Screws", completed: false },
//   ],
//   created_at: "2023-10-25T00:00:00Z",
// },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c04')",
//     name: "Holiday Shopping",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b19')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b19')"],
//     items: [
//       { name: "Gift 1", completed: false },
//       { name: "Gift 2", completed: false },
//       { name: "Gift 3", completed: false },
//       { name: "Gift 4", completed: false },
//       { name: "Gift 5", completed: false },
//     ],
//     created_at: "2023-10-24T00:00:00Z",
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c05')",
//     name: "Office Supplies",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b16')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b16')"],
//     items: [
//       { name: "Notepads", completed: false },
//       { name: "Pens", completed: false },
//       { name: "Printer Paper", completed: false },
//       { name: "Stapler", completed: false },
//       { name: "Folders", completed: false },
//     ],
//     created_at: "2023-10-23T00:00:00Z",
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c06')",
//     name: "Pet Store",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b17')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b17')"],
//     items: [
//       { name: "Dog Food", completed: true },
//       { name: "Cat Litter", completed: false },
//       { name: "Toys", completed: false },
//       { name: "Leash", completed: false },
//       { name: "Pet Shampoo", completed: false },
//     ],
//     created_at: "2023-10-22T00:00:00Z",
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c07')",
//     name: "Gardening",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b18')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b18')"],
//     items: [
//       { name: "Shovel", completed: false },
//       { name: "Gloves", completed: false },
//       { name: "Seeds", completed: false },
//       { name: "Hose", completed: false },
//       { name: "Pots", completed: false },
//     ],
//     created_at: "2023-10-21T00:00:00Z",
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4c08')",
//     name: "Electronics Store",
//     created_by: "ObjectId('6178a5b4f98abc1290ef4b19')",
//     members: ["ObjectId('6178a5b4f98abc1290ef4b19')"],
//     items: [
//       { name: "Laptop", completed: false },
//       { name: "Smartphone", completed: false },
//       { name: "Headphones", completed: false },
//       { name: "Tablet", completed: false },
//       { name: "Chargers", completed: false },
//     ],
//     created_at: "2023-10-20T00:00:00Z",
//   },
// ];
// let user = [
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4b16')",
//     username: "john_doe",
//     email: "john_doe@example.com",
//     password: "$2a$10$7.iiS0Uz.Z/GEJw6JrJx7u", // This is a hashed password representation
//     created_at: "2023-10-27T00:00:00Z",
//     shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1a')"],
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4b17')",
//     username: "jane_smith",
//     email: "jane_smith@example.com",
//     password: "$2a$10$o.Jq2sZU8d6p30Sb6F6z5e",
//     created_at: "2023-10-26T00:00:00Z",
//     shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1b')"],
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4b18')",
//     username: "mike_jones",
//     email: "mike_jones@example.com",
//     password: "$2a$10$c/svOeL.8sfz8Yz/U3Ry1O",
//     created_at: "2023-10-25T00:00:00Z",
//     shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1c')"],
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4b19')",
//     username: "lucy_white",
//     email: "lucy_white@example.com",
//     password: "$2a$10$A6.XiOu7S9Vz2.aErJ9eTe",
//     created_at: "2023-10-24T00:00:00Z",
//     shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1d')"],
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4b1a')",
//     username: "paul_brown",
//     email: "paul_brown@example.com",
//     password: "$2a$10$V5XqNO3L.ik8G.xzAJsHeu",
//     created_at: "2023-10-23T00:00:00Z",
//     shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1e')"],
//   },
//   {
//     _id: "ObjectId('6178a5b4f98abc1290ef4b1b')",
//     username: "emma_johnson",
//     email: "emma_johnson@example.com",
//     password: "$2a$10$N9pDjioI.9.Hu3XvLq7xMe",
//     created_at: "2023-10-22T00:00:00Z",
//     shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1f')"],
//   },
// ];

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics
  render(props) {
    const value = { shoppingLists };
    return typeof props.children === "function" ? props.children(value) : props.children;
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
