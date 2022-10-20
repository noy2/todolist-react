import styled, { css } from "styled-components";

const TextButton = styled.button`
  font-family: "SUIT";
  background-color: white;
  color: #777;
  border: none;
  border-radius: 4px;
  padding: 0px 8px;
  height: 36px;

  &:hover {
    color: #000;
    border-radius: 4px;
    background-color: #ebebeb;
    background-clip: border-box;
  }

  &:active {
    color: #000;
    background-color: #dddddd;
  }

  &:first-of-type {
    margin-right: 8px;
  }
`;

export default TextButton;
