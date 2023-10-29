import { createVisualComponent, useState } from "uu5g05";

const Modal = createVisualComponent({
  propTypes: {
    show: UU5.PropTypes.bool,
    onClose: UU5.PropTypes.func,
    onSave: UU5.PropTypes.func,
    title: UU5.PropTypes.string,
    description: UU5.PropTypes.string,
    users: UU5.PropTypes.string,
  },

  defaultProps: {
    show: false,
    onClose: () => {},
    onSave: () => {},
    title: "",
    description: "",
    users: "",
  },

  render(props) {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [users, setUsers] = useState(props.users);

    if (!props.show) {
      return null;
    }

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            width: "400px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // added boxShadow for a subtle shadow effect
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Edit Details</h2>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} // styled input
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", height: "100px" }} // styled textarea
            ></textarea>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Users:</label>
            <input
              type="text"
              value={users}
              onChange={(e) => setUsers(e.target.value)}
              style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} // styled input
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
            <button
              onClick={props.onClose}
              style={{
                marginRight: "10px",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                background: "#f0f0f0",
              }}
            >
              Close
            </button>
            <button
              onClick={() => props.onSave(title, description, users)}
              style={{ padding: "8px 12px", borderRadius: "4px", border: "none", background: "#4CAF50", color: "#fff" }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  },
});

export default Modal;
