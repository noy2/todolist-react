import { useState } from "react";
import styled, { css } from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import Text from "./components/Text";

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
    color: #000;
    background-color: #dddddd;
  }
`;
const TButton = styled.button`
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

const Align = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  font-size: 16px;
  font-family: "SUIT";
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

export default function TodoListItem({
  todo,
  onChange,
  onRemove,
  newText,
  setNewText,
  onChangeEditInput,
}) {
  const { id, text, checked } = todo;

  const [edit, setEdit] = useState(false);

  const onClickEdit = () => {
    console.log(!edit);
    setNewText(todo.text);
    if (edit) {
      todo.text = newText;
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <ListItem style={{ display: "flex" }}>
      <Align style={{ flex: 1 }}>
        <IButton className="checkButton" onClick={() => onChange(id)}>
          {checked ? (
            <MdCheckBox color="#277DFF" size="28" />
          ) : (
            <MdCheckBoxOutlineBlank size="28" />
          )}
        </IButton>
        {edit ? (
          <Input onChange={onChangeEditInput} value={newText} />
        ) : (
          <Text style={{ marginLeft: "8px" }} checked={checked}>
            {text}
          </Text>
        )}
      </Align>
      <Align>
        <TButton className="editButton" onClick={() => onClickEdit(id)}>
          {edit ? <Text>Save</Text> : <Text>Edit</Text>}
        </TButton>
        <IButton className="removeButton" onClick={() => onRemove(id)}>
          <HiMinus size="28" />
        </IButton>
      </Align>
    </ListItem>
  );
}
