import { Link } from "react-router-dom";
import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0 0 0;

  h1 {
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 575px) {
    h1 {
      font-size: 1.1rem;
    }
  }
`;

export const Users = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
  border: 1px solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  div.user-top {
    margin: -16px -16px 0 -16px;
    background-color: black;
    h3 {
      text-align: center;
      padding: 5px;
      color: white;
    }
  }
  p {
    text-transform: capitalize;
  }
  div.btn-wrapper {
    display: flex;
    gap: 0.3rem;
  }
    @media screen and (max-width: 575px) {
      width: 90%;
    }
}
`;

export const LinkBtn = styled(Link)`
  width: 48%;
  padding: 3px;
  border: none;
  background-color: orange;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: white;
  }
  &:nth-child(odd):hover {
    background-color: green;
  }
  &:nth-child(even):hover {
    background-color: red;
  }
`;

export const EmptyImgBD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  p {
    color: red;
    font-size: 1.5rem;
  }
  img {
    width: 90%;
    height: 350px;
    mix-blend-mode: multiply;
  }
  @media screen and (max-width: 575px) {
    p {
      color: red;
      font-size: 1rem;
    }
    img {
      width: 70%;
      height: 200px;
      mix-blend-mode: multiply;
    }
  }
`;

export const UserInfo = styled.div``;
export const UserDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: oblique;
  text-transform: capitalize;
`;
