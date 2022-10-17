import { useRef, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoListAddItem from "./TodoListAddItem";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Make todo lists',
      checked: true,
    },
    {
      id: 2,
      text: 'Add style',
      checked: true,
    },
    {
      id: 3,
      text: 'Push to git',
      checked: false,
    },
  ]);

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
  
  const nextId = useRef(4);
  const onCreate = () => {
    const data = {
      id: nextId.current,
      text,
      checked: false
    };
    nextId.current += 1;
    setTodos([...todos, data]);
    setText("");
  }

  const onChange = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  }

  return (
    <div>
      <TodoListAddItem onCreate={onCreate} text={text} handleChange={handleChange} />
      <ul className='TodoList'>
        {todos.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} onChange={onChange}/>
        ))}
      </ul>
    </div>
  );
}