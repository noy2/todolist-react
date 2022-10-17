export default function TodoListAddItem({onCreate, text, handleChange}) {
  return (
    <div>
      <input 
        className='addTodoInput' 
        placeholder="Type here..." 
        onChange={handleChange} 
        value={text} />
      <button 
        className='addTodoButton' 
        onClick={onCreate}>
          Add to do
      </button>
    </div>
  );
}