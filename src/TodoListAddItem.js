import styled, { css } from "styled-components";
import { HiPlus } from "react-icons/hi2";
import IconButton from "./components/IconButton";
import AddInput from "./components/AddInput";

const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function TodoListAddItem({
  onCreate,
  text,
  handleChange,
  handleKeyDown,
}) {
  return (
    <AddItem>
      <AddInput
        className="addTodoInput"
        placeholder="Type here..."
        onChange={handleChange}
        value={text}
        onKeyDown={handleKeyDown}
      />
      <IconButton className="addTodoButton" onClick={onCreate}>
        <HiPlus size="28px" />
      </IconButton>
    </AddItem>
  );
}
