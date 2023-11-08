// server.js
const express = require("express");
const app = express();
app.use(express.json());
const shoppingListRouter = require("./api/shoppingListApi/shoppingListRoutes");

app.use(express.json());
app.use("/shopping-lists", shoppingListRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Add additional middleware as needed

module.exports = app;
