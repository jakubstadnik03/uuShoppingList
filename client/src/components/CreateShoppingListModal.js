import React, { useState } from "react";
import { Modal, Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { users } from "../mockData/usersData";
import { useUser } from "../UserContext";

const CreateShoppingListModal = ({ show, handleClose, addNewShoppingList }) => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([
    {
      id: user.id,
      name: `${user.name} ${user.surname}`, // Assuming user has a surname property
    },
  ]);
  const [selectedUserId, setSelectedUserId] = useState([]);

  const handleUserSelectChange = (e) => {
    // Convert the HTMLOptionsCollection to an array of selected option values
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedUserId(selectedOptions);
  };

  const handleSave = () => {
    const newShoppingList = {
      id: Date.now(),
      title,
      description,
      created_by: user,
      items: [],
      members,
      archived: false,
    };
    // Add the new list to the parent state
    addNewShoppingList(newShoppingList);
    handleClose();
    console.log(newShoppingList);
  };

  const addMember = () => {
    const newMembers = selectedUserId
      .filter(
        (userId) =>
          !members.some((member) => member.id === userId) && // Prevent adding if already in the list
          userId !== user.id.toString() // Prevent adding the current user again
      )
      .map((userId) => {
        const userToAdd = users.find((user) => user.id.toString() === userId);
        return {
          id: userToAdd.id,
          name: `${userToAdd.name} ${userToAdd.surname}`, // Assuming userToAdd has a surname property
        };
      });

    setMembers(members.concat(newMembers));
    setSelectedUserId([]);
  };

  const removeMember = (memberId) => {
    if (memberId !== user.id) {
      setMembers(members.filter((member) => member.id !== memberId));
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Shopping List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Users</Form.Label>
            <Form.Select
              multiple
              value={selectedUserId}
              onChange={handleUserSelectChange}
              className="mb-1 mt-1"
            >
              <option value="">Select User(s)</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} {user.surname}
                </option>
              ))}
            </Form.Select>
            <Button
              variant="primary"
              onClick={addMember}
              disabled={selectedUserId.length === 0}
            >
              Add Member
            </Button>
          </Form.Group>

          <ListGroup className="mb-3">
            {members.map((member) => (
              <ListGroupItem
                key={member.id}
                className="d-flex justify-content-between align-items-center"
              >
                {member.name}
                {member.id !== user.id && ( // Only render the button if the member is not the current user
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeMember(member.id)}
                  >
                    Remove
                  </Button>
                )}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateShoppingListModal;
