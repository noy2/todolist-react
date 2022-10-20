import styled, { css } from "styled-components";

const ItemInput = styled.input`
  font-size: 16px;
  padding: 4px 4px 4px 7px;
  margin-right: 8px;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  flex: 1;

  &:active {
    border: none;
  }
  &:focus {
    padding: 4px 4px 4px 6px;
    border-radius: 4px;
    border: 2px solid #000;
  }

  &::placeholder {
    color: #b4b4b4;
  }
`;

export default ItemInput;
