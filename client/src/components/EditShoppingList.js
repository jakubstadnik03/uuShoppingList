import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modal.css";
import { users } from "../mockData/usersData";

const EditShoppingList = ({
  show,
  handleClose,
  shoppingList,
  setShoppingList,
}) => {
  const [title, setTitle] = useState(shoppingList.title);
  const [description, setDescription] = useState(shoppingList.description);
  const [archived, setArchived] = useState(shoppingList.archived);
  const [members, setMembers] = useState(shoppingList.members);
  const [selectedUserId, setSelectedUserId] = useState("");

  const saveChanges = (e) => {
    e.preventDefault(); // Prevent the default form submission if using onSubmit
    const updatedShoppingList = {
      ...shoppingList,
      title: title,
      description: description,
      archived: archived,
      members: members,
    };

    setShoppingList(updatedShoppingList); // Update the list in the parent component
    handleClose(); // Close the modal
    console.log("Updated List: ", updatedShoppingList); // Log the new list
  };
  const addMember = () => {
    // Check if user is already a member
    if (members.some((member) => member.id === selectedUserId)) {
      alert("User is already a member!");
      return;
    }

    // Find the user in the users array
    const userToAdd = users.find(
      (user) => user.id.toString() === selectedUserId
    );

    if (userToAdd) {
      // Add the user to the members array
      setMembers([
        ...members,
        { id: userToAdd.id, name: `${userToAdd.name} ${userToAdd.surname}` },
      ]);
    }
  };
  const handleUserSelectChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  const toggleArchive = () => setArchived(!archived);

  const handleMemberChange = (id, remove = false) => {
    if (remove) {
      setMembers(members.filter((member) => member.id !== id));
    } else {
      // Add a member logic would go here
      // For simplicity, this example won't include the UI for adding a new member
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Shopping List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              className="modal-input"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              className="modal-input"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Check
            type="checkbox"
            label="Archive this shopping list"
            checked={archived}
            onChange={toggleArchive}
          />

          <div>
            <h5>Members</h5>
            {members.map((member, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center mb-1 mt-1"
              >
                <span>{member.name}</span>
                {shoppingList.created_by.id !== member.id ? (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleMemberChange(member.id, true)}
                  >
                    Remove
                  </Button>
                ) : (
                  <Button variant="outline-danger" size="sm" disabled>
                    Owner
                  </Button>
                )}
              </div>
            ))}
            <Form.Group className="mb-3">
              <Form.Select
                value={selectedUserId}
                onChange={handleUserSelectChange}
                className="mb-1 mt-1"
              >
                <option value="">Select User</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} {user.surname}
                  </option>
                ))}
              </Form.Select>
              <Button
                variant="primary"
                onClick={addMember}
                disabled={!selectedUserId}
              >
                Add Member
              </Button>
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditShoppingList;
