import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.div`
  background-color: black;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: sticky;
  top: 0;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:nth-child(1) {
    text-decoration: line-through;
  }
  &:hover {
    color: blue;
  }
  @media screen and (max-width: 575px) {
    font-size: 1.2rem;
  }
`;
