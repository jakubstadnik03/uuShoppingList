import React, { useState } from "react";
import EditShoppingList from "../components/EditShoppingList";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { shoppingListData } from "../mockData/shoppingListData";
import "./shoppingListView.css";
import NavigationBar from "../components/NavigationBar";
import { useUser } from "../UserContext";

const ShoppingListItem = ({ item, index, onRemove, onCheck }) => {
  return (
    <li
      className={`shoppingListItem ${
        item.checked ? "shoppingListItemChecked" : ""
      }`}
    >
      <span className="shoppingListItemNumber">{index + 1}</span>
      {item.name}
      <button onClick={onRemove} className="removeButton">
        X
      </button>
      <button
        onClick={onCheck}
        className={`checkButton ${item.checked ? "checkButtonChecked" : ""}`}
      >
        ✓
      </button>
    </li>
  );
};
const MemberList = ({ members, creator }) => {
  const [hoveredUserIndex, setHoveredUserIndex] = useState(null);

  const handleMouseOver = (index) => setHoveredUserIndex(index);
  const handleMouseOut = () => setHoveredUserIndex(null);
  return (
    <div className="memberList">
      {members.map((user, index) => (
        <div
          key={index}
          className="memberItem"
          style={user.id === creator.id ? { border: "2px solid #00CB45" } : {}}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          {user.name.substring(0, 2).toUpperCase()}
          {hoveredUserIndex === index && (
            <span className="tooltip">{user.name}</span>
          )}
        </div>
      ))}
    </div>
  );
};

const ShoppingListView = () => {
  let { id } = useParams();

  id = parseInt(id, 10); // Convert to integer if necessary

  // Find the shopping list with the given id
  const [shoppingList, setShoppingList] = useState(() => {
    const foundShoppingList = shoppingListData.find((list) => list.id === id);
    return foundShoppingList || {};
  });
  const { user } = useUser();
  const [items, setItems] = useState(shoppingList.items);
  const [newItem, setNewItem] = useState("");
  const [showChecked, setShowChecked] = useState(false);

  const handleAddItem = () => {
    if (!newItem) return; // Prevent adding empty items
    const updatedItems = [...items, { name: newItem, checked: false }];
    setItems(updatedItems);
    setNewItem(""); // Reset the input field
  };
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleCheckItem = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const isOwner = shoppingList.created_by.id == user.id;

  const ShowIcon = () => <img src="/view.svg" alt="show icon" />;

  const HideIcon = () => <img src="/hide.svg" alt="hide icon" />;
  const handleToggleChecked = () => {
    setShowChecked(!showChecked);
  };
  const visibleItems = showChecked
    ? items
    : items.filter((item) => !item.checked);

  const [modalShow, setModalShow] = useState(false);
  //   const [shoppingList, setShoppingList] = useState(shoppingList);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  return (
    <>
      <NavigationBar />
      <div className="main">
        <div className="d-flex  justify-content-between">
          <div>
            <div className="d-flex">
              <h1 className="title">{shoppingList.title}</h1>{" "}
              <MemberList
                members={shoppingList.members}
                creator={shoppingList.created_by}
              />
            </div>
            <p className="description">{shoppingList.description}</p>{" "}
            {/* Fixed: Used index to access description */}
            <div className="toggle-button-container">
              <button onClick={handleToggleChecked} className="check-button ">
                {showChecked ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>
          </div>
          {isOwner && (
            <Button
              variant="primary"
              onClick={handleModalShow}
              className="bg-transparent border-0 align-self-start"
            >
              <img src="/edit-icon.svg" alt="" />
            </Button>
          )}
        </div>
        <EditShoppingList
          show={modalShow}
          handleClose={handleModalClose}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
        <div className="addItemContainer">
          <input
            type="text"
            className="addItemInput"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item..."
          />
          <button onClick={handleAddItem} className="addItemButton">
            Add
          </button>
        </div>
        <ul className="shoppingListContainer">
          {visibleItems.map((item, index) => (
            <ShoppingListItem
              key={index}
              item={item}
              index={index}
              onRemove={() => handleRemoveItem(index)}
              onCheck={() => handleCheckItem(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShoppingListView;
