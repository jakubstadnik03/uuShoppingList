import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./UserContext";

// Import BrowserRouter and Routes, Route from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components that will serve as pages
import ShoppingList from "./routes/shoppingListView"; // Assuming you have a ShoppingList component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Define your route paths and corresponding components here */}
          <Route path="/" element={<App />} />
          <Route path="/shopping-list/:id" element={<ShoppingList />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </UserProvider>
);

reportWebVitals();
