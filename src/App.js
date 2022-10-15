import React from 'react';

export default function App() {
  const todos = [
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
  ];

  function TodoList({todos}) {
    return (
      <div>
        <TodoListAddItem />
        <ul className='TodoList'>
          {todos.map((todo) => (
            <TodoListItem todo={todo} id={todo.id} />
          ))}
        </ul>
      </div>
    );
  }

  function TodoListItem({todo}) {
    const {id,text,checked} = todo;
    return (
      <li className='TodoListItem'>
        <div className={checked}>
          {/* {checked === true ? <p>checked</p> : <p>In list</p>} */}
          <div className='text'>{checked ? (
            <del>{text + ' ✔'}</del>
          ):(
            text
          )}</div>
          <button className='checkButton'>{checked ? (
            'Uncheck'
          ):(
            'Check'
          )}</button>
        </div>
      </li>
    );
  }

  function TodoListAddItem() {
    return (
      <div>
        <input className='addTodoInput' placeholder="Type here..."></input>
        <button className='addTodoButton'>Add to do</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>TodoList</p>
      <TodoList todos={todos} />
    </div>
  );
}
