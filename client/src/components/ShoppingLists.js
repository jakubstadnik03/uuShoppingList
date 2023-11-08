import React, { useState } from "react";
import { shoppingListData } from "../mockData/shoppingListData";
import "./ShoppingLists.css";
import CreateShoppingListModal from "./CreateShoppingListModal";
import { useUser } from "../UserContext";

const ShoppingLists = () => {
  const [lists, setLists] = useState(shoppingListData); // Now the component has its own state for lists
  const [showArchived, setShowArchived] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false); // State to manage modal visibility
  const { user } = useUser();

  const toggleArchivedVisibility = () => {
    setShowArchived(!showArchived);
  };
  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };
  const deleteShoppingList = (listId) => {
    // Confirm with the user before deleting
    if (window.confirm("Are you sure you want to delete this shopping list?")) {
      const updatedLists = lists.filter((list) => list.id !== listId);

      // Update the state with the new array of lists, which doesn't include the deleted one
      setLists(updatedLists);
      console.log(lists);
    }
  };
  const addNewShoppingList = (newList) => {
    setLists([...lists, newList]);
  };

  const visibleLists = showArchived
    ? lists
    : lists.filter((list) => !list.archived);
  return (
    <div className="container">
      <button
        onClick={toggleArchivedVisibility}
        className="btn btn-info mb-3 mt-3"
      >
        {showArchived ? "Hide Archived" : "Show Archived"}
      </button>
      <button
        onClick={handleShowCreateModal}
        className="btn btn-success mb-3 mt-3 mx-2"
      >
        Create New List
      </button>
      <div className="row">
        {visibleLists.map((list) => (
          <div
            key={list.id}
            className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-3 ${
              list.archived ? "archived" : ""
            }`}
          >
            <div
              className={`card h-100 ${list.archived ? "border-danger" : ""}`}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {list.title}
                  {list.archived && (
                    <span className="text-danger ms-2">Archived</span>
                  )}
                </h5>
                <p className="card-text">{list.description}</p>
                <ul className="list-group list-group-flush mb-auto">
                  {list.items.slice(0, 3).map((item, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${
                        item.checked ? "list-checked" : ""
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                  {list.items.length > 3 && (
                    <li className="list-group-item list-more-items">
                      + {list.items.length - 3} more...
                    </li>
                  )}
                </ul>
                <div className="buttons-down card-footer">
                  <a
                    href={`/shopping-list/${list.id}`}
                    className="btn btn-primary "
                  >
                    View List
                  </a>
                  {user && user.id === list.created_by.id && (
                    <button
                      onClick={() => deleteShoppingList(list.id)}
                      className="btn btn-danger mx-2 "
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CreateShoppingListModal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
        addNewShoppingList={addNewShoppingList} // Pass the function as a prop
      />
    </div>
  );
};

export default ShoppingLists;
