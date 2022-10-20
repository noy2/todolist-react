import styled, { css } from "styled-components";

const AddInput = styled.input`
  font-family: "SUIT";
  font-size: 16px;
  padding: 8px;
  margin-right: 8px;
  flex: none;
  flex-grow: 1;
  border: none;

  &:active {
    border: none;
  }
  &:focus {
    border-radius: 4px;
    outline: none;
  }

  &::placeholder {
    color: #b4b4b4;
  }
`;

export default AddInput;
