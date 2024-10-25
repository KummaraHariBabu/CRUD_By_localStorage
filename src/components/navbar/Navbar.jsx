import React from "react";
import { StyledLink, Nav } from "./Navbar.style";
 const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">
        <i>CRUD</i>
      </StyledLink>
      <StyledLink to="/userdatabase">
        <i>Data-Base</i>
      </StyledLink>
    </Nav>
  );
};

export default Navbar;
