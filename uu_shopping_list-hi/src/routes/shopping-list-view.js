import { createVisualComponent, useState } from "uu5g05";
import RouteBar from "../core/route-bar";
import Modal from "../core/modal";

const Css = {
  main: () => ({
    maxWidth: "1200px",
    margin: "0 auto",
    background: "#f9f9f9",
    padding: "20px",
    marginTop: "50px",
  }),
  title: () => ({
    fontSize: "24px",
    color: "#00CB45",
  }),
  description: () => ({
    fontSize: "16px",
  }),
  shoppingListContainer: () => ({
    listStyleType: "none",
    padding: 0,
    margin: 0,
  }),
  shoppingListItem: () => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    background: "#fff",
    transition: "opacity 0.3s, background 0.3s",
  }),
  shoppingListItemNumber: () => ({
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    border: "2px solid #00CB45",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    fontSize: "18px",
  }),
  addItemContainer: () => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
    margin: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    background: "#fff",
  }),
  addItemInput: () => ({
    flex: 1,
    border: "none",
    padding: "5px",
    fontSize: "16px",
  }),
  addItemButton: () => ({
    marginLeft: "10px",
    background: "#00CB45",
    color: "white",
    border: "none",
    padding: "5px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  }),
  removeButton: () => ({
    marginLeft: "auto",
    width: "30px",
    height: "30px",
    background: "#F23950",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
  }),
  checkButton: () => ({
    width: "30px",
    height: "30px",
    background: "#ccc",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    marginLeft: "10px",
  }),
  shoppingListItemChecked: () => ({
    opacity: 0.5,
  }),
  checkButtonChecked: () => ({
    backgroundColor: "#00CB45",
  }),
  toggleButtonContainer: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  }),
  editIcon: () => ({
    backgroundColor: "inherit",
    border: "0",
    cursor: "pointer",
  }),
  memberList: () => ({
    display: "flex",
    alignItems: "center",
    padding: "10px",
  }),

  memberItem: () => ({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    fontSize: "16px",
    cursor: "pointer",
  }),
  tooltip: () => ({
    position: "absolute",
    background: "#333",
    color: "#fff",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    pointerEvents: "none",
    marginLeft: "50px",
    marginBottom: "50px",
  }),
};

const ShoppingListView = createVisualComponent({
  propTypes: {},
  defaultProps: {},
  render(props) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState({
      title: props.shoppingList.title,
      description: props.shoppingList.description,
      // Assume users is a property of shoppingList, you might want to adapt
      users: props.shoppingList.users,
    });
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState(props.shoppingList.items);
    const [showChecked, setShowChecked] = useState(false); // State to toggle checked item visibility
    const [hoveredUserIndex, setHoveredUserIndex] = useState(null);

    const handleMouseOver = (index) => {
      setHoveredUserIndex(index);
    };

    const handleMouseOut = () => {
      setHoveredUserIndex(null);
    };

    const handleAddItem = () => {
      if (newItem) {
        setItems([...items, { name: newItem, checked: false }]);
        setNewItem("");
      }
    };
    const handleEditIconClick = () => {
      setShowEditModal(true);
    };
    const handleModalConfirm = (newData) => {
      setEditData(newData); // you might want to lift this state up or manage it differently
      setShowEditModal(false);
    };

    const handleRemoveItem = (index) => {
      const updatedItems = items.slice();
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };

    const handleCheckItem = (index) => {
      const updatedItems = [...items];
      updatedItems[index] = {
        ...items[index],
        checked: !items[index].checked,
      };
      setItems(updatedItems);
    };
    const ShowIcon = () => <img src="/assets/view.svg" alt="show icon" />;

    const HideIcon = () => <img src="/assets/hide.svg" alt="hide icon" />;
    const handleToggleChecked = () => {
      setShowChecked(!showChecked);
    };
    const users = [
      {
        _id: "ObjectId('6178a5b4f98abc1290ef4b18')",
        username: "mike_jones",
        name: "Mike",
        surname: "Jones",
        email: "mike_jones@example.com",
        password: "$2a$10$c/svOeL.8sfz8Yz/U3Ry1O",
        created_at: "2023-10-25T00:00:00Z",
        shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1c')"],
      },
      {
        _id: "ObjectId('6178a5b4f98abc1290ef4b19')",
        username: "lucy_white",
        name: "Lucy",
        surname: "White",
        email: "lucy_white@example.com",
        password: "$2a$10$A6.XiOu7S9Vz2.aErJ9eTe",
        created_at: "2023-10-24T00:00:00Z",
        shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1d')"],
      },
      {
        _id: "ObjectId('6178a5b4f98abc1290ef4b1a')",
        username: "paul_brown",
        name: "Paul",
        surname: "Brown",
        email: "paul_brown@example.com",
        password: "$2a$10$V5XqNO3L.ik8G.xzAJsHeu",
        created_at: "2023-10-23T00:00:00Z",
        shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1e')"],
      },
      {
        _id: "ObjectId('6178a5b4f98abc1290ef4b1b')",
        username: "emma_johnson",
        name: "Emma",
        surname: "Johnsn",
        email: "emma_johnson@example.com",
        password: "$2a$10$N9pDjioI.9.Hu3XvLq7xMe",
        created_at: "2023-10-22T00:00:00Z",
        shopping_lists: ["ObjectId('6178a5b4f98abc1290ef4b1f')"],
      },
    ];

    return (
      <>
        <RouteBar />
        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onConfirm={handleModalConfirm}
          initialData={editData}
        />
        <main style={Css.main()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex" }}>
              <h1 style={Css.title()}>{editData.title}</h1>
              <div style={Css.memberList()}>
                {users &&
                  users.map((user, index) => (
                    <div
                      key={index}
                      style={Css.memberItem()}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={handleMouseOut}
                    >
                      {user.name.substring(0, 2).toUpperCase()}
                      {hoveredUserIndex === index && (
                        <span style={Css.tooltip()}>{`${user.name} ${user.surname}`}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <button onClick={handleEditIconClick} style={Css.editIcon()}>
              <img src="/assets/edit-icon.svg" alt="Edit" />
            </button>
          </div>

          <p style={Css.description()}>{editData.description}</p>
          <div style={Css.toggleButtonContainer()}>
            <button onClick={handleToggleChecked} style={Css.checkButton()}>
              {showChecked ? <HideIcon /> : <ShowIcon />}
            </button>
          </div>
          <ol style={Css.shoppingListContainer()}>
            {items.map((item, index) => {
              if (!showChecked && item.checked) {
                return null; // Skip rendering checked items if showChecked is false
              }
              return (
                <li
                  key={index}
                  style={{
                    ...Css.shoppingListItem(),
                    ...(item.checked ? Css.shoppingListItemChecked() : {}),
                  }}
                >
                  <span style={Css.shoppingListItemNumber()}>{index + 1}</span>
                  {item.name}
                  <button onClick={() => handleRemoveItem(index)} style={Css.removeButton()}>
                    X
                  </button>
                  <button
                    onClick={() => handleCheckItem(index)}
                    style={{ ...Css.checkButton(), ...(item.checked ? Css.checkButtonChecked() : {}) }}
                  >
                    ✓
                  </button>
                </li>
              );
            })}
          </ol>
          <div style={Css.addItemContainer()}>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              style={Css.addItemInput()}
              placeholder="Add a new item"
            />
            <button onClick={handleAddItem} style={Css.addItemButton()}>
              Add
            </button>
          </div>
        </main>
      </>
    );
  },
});

export { ShoppingListView };
export default ShoppingListView;
