import styled, { css } from "styled-components";
const FlexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

// Define a constants object for reusable values
const variables = {
  fontSize: "20px",
  primaryColor: "orange",
  secondaryColor: "tan",
  padding: "0.5rem",
};

// Use these variables in your styled components
export const Container = styled.div`
  ${FlexColumn};
  margin: auto;
  padding-top: ${variables.padding}; /* Using padding variable */
  @media screen and (max-width: 575px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${variables.secondaryColor}; /* Using background color variable */
  border-radius: 4px;
  box-shadow: 4px 5px 7.5px black;
  padding: 1rem;

  label {
    margin-bottom: 2px;
    cursor: pointer;
  }

  input {
    margin-bottom: ${variables.padding}; /* Using padding variable */
    padding: 0.3rem;
  }

  button {
    width: 100px;
    padding: 0.3rem 0;
    margin: auto;
    background-color: ${variables.primaryColor}; /* Using primary color variable */
    color: white;
    border: none;
    font-weight: 600;
  }
  @media screen and (max-width: 575px) {
    width: 90%;
    h1 {
      font-size: 1rem;
    }
  }
`;
