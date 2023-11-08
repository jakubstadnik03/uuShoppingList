const mockShoppingLists = [
  {
    id: 1,
    title: "Nákup na víkend",
    description:
      "Tento seznam je určený pro potraviny, který mi vystačí na víkend",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Vajíčka", checked: true },
      { id: 2, name: "paprika", checked: false },
      { id: 3, name: "okurka", checked: true },
      { id: 4, name: "máslo", checked: false },
      { id: 5, name: "pepř", checked: true },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 69,
    title: "Nákup na mars",
    description: "Tento nákup vás dostane na mars",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "raketa", checked: true },
      { id: 2, name: "oblek", checked: false },
      { id: 3, name: "okurka", checked: true },
      { id: 4, name: "boty", checked: false },
      { id: 5, name: "spacák", checked: true },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 4, name: "karel Gott" },
    ],
    archived: true,
  },
  {
    id: 2,
    title: "Groceries for the Week",
    description: "A shopping list for a week's worth of groceries",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Apples", checked: false },
      { id: 2, name: "Bread", checked: false },
      { id: 3, name: "Milk", checked: false },
      { id: 4, name: "Cheese", checked: false },
      { id: 5, name: "Tomatoes", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 3,
    title: "I AM NOT THE OWNER",
    description: "List of items for home improvement",
    created_by: { id: 2, name: "karel Poláček" },
    items: [
      { id: 1, name: "Paint", checked: false },
      { id: 2, name: "Brushes", checked: false },
      { id: 3, name: "Nails", checked: false },
      { id: 4, name: "Hammer", checked: false },
      { id: 5, name: "Screws", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 4,
    title: "Holiday Shopping",
    description: "Shopping list for holiday gifts",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Gift 1", checked: false },
      { id: 2, name: "Gift 2", checked: false },
      { id: 3, name: "Gift 3", checked: false },
      { id: 4, name: "Gift 4", checked: false },
      { id: 5, name: "Gift 5", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: true,
  },
  {
    id: 5,
    title: "Office Supplies",
    description: "Supplies for the office",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Notepads", checked: false },
      { id: 2, name: "Pens", checked: false },
      { id: 3, name: "Printer Paper", checked: false },
      { id: 4, name: "Stapler", checked: false },
      { id: 5, name: "Folders", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 6,
    title: "Pet Store",
    description: "Shopping for pet supplies",
    created_by: { id: 2, name: "Karel Poláček" },
    items: [
      { id: 1, name: "Dog Food", checked: true },
      { id: 2, name: "Cat Litter", checked: false },
      { id: 3, name: "Toys", checked: false },
      { id: 4, name: "Leash", checked: false },
      { id: 5, name: "Pet Shampoo", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 7,
    title: "Gardening",
    description: "Shopping list for gardening tools",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Shovel", checked: false },
      { id: 2, name: "Gloves", checked: false },
      { id: 3, name: "Seeds", checked: false },
      { id: 4, name: "Hose", checked: false },
      { id: 5, name: "Pots", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 8,
    title: "Electronics Store",
    description: "Shopping for electronics",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Laptop", checked: false },
      { id: 2, name: "Smartphone", checked: false },
      { id: 3, name: "Headphones", checked: false },
      { id: 4, name: "Tablet", checked: false },
      { id: 5, name: "Chargers", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
  {
    id: 9,
    title: "Toiletries",
    description: "List of toiletries and personal care items",
    created_by: { id: 123, name: "Jakub Stádník" },
    items: [
      { id: 1, name: "Shampoo", checked: false },
      { id: 2, name: "Toothbrush", checked: false },
      { id: 3, name: "Soap", checked: false },
      { id: 4, name: "Deodorant", checked: false },
      { id: 5, name: "Towels", checked: false },
    ],
    members: [
      { id: 123, name: "Jakub Stadnik" },
      { id: 2, name: "karel Poláček" },
    ],
    archived: false,
  },
];

module.exports = mockShoppingLists;
