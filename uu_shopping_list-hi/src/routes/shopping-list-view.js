import { createVisualComponent, useState } from "uu5g05";
import RouteBar from "../core/route-bar";
import Modal from "../core/modal";
import ListProvider from "../bricks/list-provider";
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
  ownerItem: () => ({}),
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
    const shoppingListData = {
      id: 1,
      title: "Nákup na víkend",
      description: "Tento seznam je určený pro potraviny, který mi vystačí na víkend",
      created_by: 1,
      items: [
        { name: "Vajíčka", checked: true },
        { name: "paprika", checked: false },
        { name: "okurka", checked: true },
        { name: "máslo", checked: false },
        { name: "pepř", checked: true },
      ],
      members: [123, 2, 3, 4, 1],
      archived: false,
    };
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
                <ListProvider>
                  {({ users }) => (
                    <>
                      {users
                        .filter((user) => props.shoppingList.members.includes(user.id))
                        .map((user, index) => (
                          <div
                            key={index}
                            style={
                              user.id === props.shoppingList.created_by
                                ? { ...Css.memberItem(), border: "2px solid #00CB45" }
                                : Css.memberItem()
                            }
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut}
                          >
                            {user.name.substring(0, 2).toUpperCase()}
                            {hoveredUserIndex === index && (
                              <span style={Css.tooltip()}>{`${user.name} ${user.surname}`}</span>
                            )}
                          </div>
                        ))}
                    </>
                  )}
                </ListProvider>
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
