import { useState } from "react";

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
    <li className="TodoListItem">
      <div className="aa">
        {edit ? (
          <div>
            <input onChange={onChangeEditInput} value={newText} />
          </div>
        ) : (
          <div className="text">
            {checked ? (
              <div>
                <del>{text}</del>
              </div>
            ) : (
              <div>{text}</div>
            )}
          </div>
        )}
        <button className="checkButton" onClick={() => onChange(id)}>
          {checked ? "Uncheck" : "Check"}
        </button>
        <button className="removeButton" onClick={() => onRemove(id)}>
          Remove
        </button>
        <button className="editButton" onClick={() => onClickEdit(id)}>
          {edit ? <div>Save</div> : <div>Edit</div>}
        </button>
      </div>
    </li>
  );
}
