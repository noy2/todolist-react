export default function TodoListItem({todo, onChange}) {
  const { id, text, checked } = todo;
  return (
    <li className='TodoListItem'>
      <div className='aa'>
        {/* {checked === true ? <p>checked</p> : <p>In list</p>} */}
        <div className='text'>{checked ? (
          <del>{text + ' ✔'}</del>
        ):(
          <div>{text}</div>
        )}</div>
        <button className='checkButton' onClick={() => onChange(id)}>{checked ? (
          'Uncheck'
        ):(
          'Check'
        )}</button>
      </div>
    </li>
  );
}