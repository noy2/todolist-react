import { useRef, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoListAddItem from "./TodoListAddItem";
import styled, { css } from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

const Box = styled.div`
  width: 800px;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 16px;
`;

const Divider = styled.div`
  background-color: #ebebeb;
  margin-left: -16px;
  margin-bottom: 16px;
  margin-top: 16px;
  width: calc(100% + 32px);
  height: 1px;
`;

const H1 = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-left: 8px;
`;

const Description = styled.div`
  font-size: 16px;
  margin-top: 4px;
  color: #b4b4b4;
  margin-left: 8px;
`;

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "1. Make todo lists",
      checked: true,
    },
    {
      id: 2,
      text: "2. Add style",
      checked: true,
    },
    {
      id: 3,
      text: "3. Push to git",
      checked: false,
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

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  return (
    <Box>
      <H1>To-do List</H1>
      <Description>This is my todo list</Description>
      <Divider />
      <Ul className="TodoList">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onChange={onChange}
            onRemove={onRemove}
            onChangeEditInput={onChangeEditInput}
            newText={newText}
            setNewText={setNewText}
          />
        ))}
      </Ul>
      <Divider />
      <TodoListAddItem
        onCreate={onCreate}
        text={text}
        handleChange={handleChange}
      />
    </Box>
  );
}
