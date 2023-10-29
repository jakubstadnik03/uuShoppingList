//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";

let shoppingLists = [
  {
    id: 1,
    title: "Nákup na víkend",
    description: "Tento seznam je určený pro potraviny, který mi vystačí na víkend",
    created_by: 888,
    items: [
      { name: "Vajíčka", checked: true },
      { name: "paprika", checked: false },
      { name: "okurka", checked: true },
      { name: "máslo", checked: false },
      { name: "pepř", checked: true },
    ],
    members: [123, 2, 3, 4, 888],
    archived: false,
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
];
let users = [
  {
    id: 888,
    name: "Mike",
    surname: "Jones",
    shopping_lists: [1],
  },
  {
    id: 123,
    name: "Lucy",
    surname: "White",
    shopping_lists: [1],
  },
  {
    id: 3,
    name: "Paul",
    surname: "Brown",
    shopping_lists: [1],
  },
  {
    id: 2,
    name: "Emma",
    surname: "Johnsn",
    shopping_lists: [1],
  },
  {
    id: 8,
    name: "Nejsem",
    surname: "Tam",
    shopping_lists: [3],
  },
];

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics
  render(props) {
    const value = { shoppingLists, users };
    return typeof props.children === "function" ? props.children(value) : props.children;
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
