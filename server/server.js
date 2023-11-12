const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // Hardcoded user
  req.user = { id: 123, name: "Jakub Stádník" };
  next();
});

const shoppingListRouter = require("./api/shoppingListApi/shoppingListRoutes");
app.use("/shopping-lists", shoppingListRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
