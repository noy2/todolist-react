export default function TodoListItem({
  todo,
  onChange,
  onRemove,
  onClickEdit,
  onChangeEditInput,
  newText,
}) {
  const { id, text, checked, edit } = todo;
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
