import styled, { css } from "styled-components";

const IconButton = styled.button`
  background: white;
  outline: 0;
  color: #777777;
  border: none;
  padding: 4px 4px 1px 4px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    color: black;
    border-radius: 4px;
    background-color: #ebebeb;
  }

  &:active {
    color: #000;
    background-color: #dddddd;
  }
`;

export default IconButton;
