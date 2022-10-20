import { useState } from "react";
import styled, { css } from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { HiMinus } from "react-icons/hi2";
import Text from "./components/Text";
import IconButton from "./components/IconButton";
import TextButton from "./components/TextButton";
import ItemInput from "./components/ItemInput";

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
        <IconButton className="checkButton" onClick={() => onChange(id)}>
          {checked ? (
            <MdCheckBox color="#277DFF" size="28" />
          ) : (
            <MdCheckBoxOutlineBlank size="28" />
          )}
        </IconButton>
        {edit ? (
          <ItemInput onChange={onChangeEditInput} value={newText} />
        ) : (
          <Text style={{ marginLeft: "8px" }} checked={checked}>
            {text}
          </Text>
        )}
      </Align>
      <Align>
        <TextButton className="editButton" onClick={() => onClickEdit(id)}>
          {edit ? <Text>Save</Text> : <Text>Edit</Text>}
        </TextButton>
        <IconButton className="removeButton" onClick={() => onRemove(id)}>
          <HiMinus size="28" />
        </IconButton>
      </Align>
    </ListItem>
  );
}
