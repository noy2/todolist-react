import styled, { css } from "styled-components";
import { HiPlus } from "react-icons/hi2";

const IButton = styled.button`
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
    color: black;
    background-color: #dddddd;
  }
`;
const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  font-size: 16px;
  font-family: "SUIT";
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

export default function TodoListAddItem({ onCreate, text, handleChange }) {
  return (
    <AddItem>
      <Input
        className="addTodoInput"
        placeholder="Type here..."
        onChange={handleChange}
        value={text}
      />
      <IButton className="addTodoButton" onClick={onCreate}>
        <HiPlus size="28px" />
      </IButton>
    </AddItem>
  );
}
