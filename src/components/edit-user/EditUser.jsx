import React, { useEffect, useState } from "react";
import { Container, Form } from "../form-container/FormContainer.style";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    company: "",
    salary: "",
  });
  const { userId } = useParams();
  const navigate = useNavigate();
  // Load the existing user data when component mounts
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Find the user by ID (or index)
    const userToEdit = existingUsers[userId];

    if (userToEdit) {
      setUser(userToEdit);
    }
  }, [userId]);

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Update the specific user data
    const updatedUsers = existingUsers.map((existingUser, index) =>
      index === parseInt(userId) ? user : existingUser
    );

    // Store the updated array back in localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    console.log("Updated user data in localStorage:", updatedUsers);

    // Optionally clear the form or navigate to another page
    setUser({ name: "", company: "", salary: "" });
    navigate("/userdatabase");
  };


  return (
    <Container>
      <h1>Edit User</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={changeHandler}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={user.company}
          onChange={changeHandler}
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={user.salary}
          onChange={changeHandler}
        />
        <button type="submit">Update</button>
      </Form>
    </Container>
  );
};

export default EditUser;
