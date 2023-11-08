import React, { createContext, useContext, useState } from "react";

// Create a Context for the user data
const UserContext = createContext(null);

// Create a hook to use the user context
export function useUser() {
  return useContext(UserContext);
}

// Create a provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 123,
    name: "Jakub",
    surname: "Stádník",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
