import { useRef, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoListAddItem from "./TodoListAddItem";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "1. Make todo lists",
      checked: true,
      edit: false,
    },
    {
      id: 2,
      text: "2. Add style",
      checked: true,
      edit: false,
    },
    {
      id: 3,
      text: "3. Push to git",
      checked: false,
      edit: false,
    },
  ]);

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const nextId = useRef(4);
  const onCreate = () => {
    const data = {
      id: nextId.current,
      text,
      checked: false,
      edit: false,
    };
    nextId.current += 1;
    setTodos([...todos, data]);
    setText("");
  };

  const onChange = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  const onRemove = (id) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [newText, setNewText] = useState("");

  const onClickEdit = (id) => {
    setNewText(todos[id - 1].text);
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, text: newText, edit: !todo.edit }
          : todo;
      })
    );
  };

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div>
      <TodoListAddItem
        onCreate={onCreate}
        text={text}
        handleChange={handleChange}
      />
      <ul className="TodoList">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onChange={onChange}
            onRemove={onRemove}
            onClickEdit={onClickEdit}
            onChangeEditInput={onChangeEditInput}
            newText={newText}
          />
        ))}
      </ul>
    </div>
  );
}
