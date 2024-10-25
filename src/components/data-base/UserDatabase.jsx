import React, { useEffect, useState } from "react";
import {
  UsersContainer,
  Users,
  User,
  LinkBtn,
  EmptyImgBD,
  UserInfo,
  UserDetail
} from "./UserDatabase.style";
import emptyUser from "../../assets/empty-users-database.avif";
const UserDatabase = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storedUsers);
  }, []);

  const handleDeleteUser = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user's data?"
    );
    if (confirmDelete) {
      const updateUsers = [...users];
      updateUsers.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(updateUsers));
      setUsers(updateUsers);
    }
  };
  return (
    <UsersContainer>
      <h1>Users</h1>
      <Users>
        {users && users.length > 0 ? (
          users.map((user, index) => {
            return (
              <User key={index}>
                <div className="user-top">
                  <h3>User {index + 1}</h3>
                </div>
                <UserInfo>
                  <UserDetail>
                    <span>Name:</span>
                    <span>{user.name}</span>
                  </UserDetail>
                  <UserDetail>
                    <span>Company:</span>
                    <span> {user.company}</span>
                  </UserDetail>
                  <UserDetail>
                    <span>Salary:</span>
                    <span>{user.salary}</span>
                  </UserDetail>
                </UserInfo>
                <div className="btn-wrapper">
                  <LinkBtn to={`/edituser/${index}`}>Edit</LinkBtn>
                  <LinkBtn onClick={() => handleDeleteUser(index)}>
                    Delete
                  </LinkBtn>
                </div>
              </User>
            );
          })
        ) : (
          <EmptyImgBD className="empty-user-database">
            <p>Users data is Empty...</p>
            <img src={emptyUser} alt="empty databse" />
          </EmptyImgBD>
        )}
      </Users>
    </UsersContainer>
  );
};

export default UserDatabase;
