import React, { useState } from "react";
import { Container, Form } from "./FormContainer.style";

const FormContainer = () => {
  const [user, setUser] = useState({
    name: "",
    company: "",
    salary: "",
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get existing users from localStorage (if any)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Add the new user to the array
    const updatedUsers = [...existingUsers, user];
    // Store the updated array back in localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("User data stored in localStorage:", updatedUsers);

    // Clear the form after submission
    setUser({ name: "", company: "", salary: "" });
    alert("User details have been successfully saved to the database.");

  };

  return (
    <Container>
      <h1>Create User</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name || ""}
          onChange={changeHandler}
          required
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={user.company || ""}
          onChange={changeHandler}
          required
        />
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={user.salary || ""}
          onChange={changeHandler}
          required
        />
        <button type="submit">Create</button>
      </Form>
    </Container>
  );
};

export default FormContainer;
