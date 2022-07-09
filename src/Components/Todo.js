import React, { useState } from 'react';

function Todo() {
  //For Input Field
  const [value, setValue] = useState("");
  //For Todo List
  const [todos, setTodos] = useState([]);
  //For Add Todo
  const addTodo = (e) => {
    e.preventDefault();//Prevent Default behaviour
    setTodos([...todos, value]);//Add new value to todos list
    setValue("");//reset input field
  };
  const delTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };
  return(
    <>
    <div className="bg-rose-100">
    <form className="flex flex-row-1 ml-4 space-x-2">
      <input type="text" placeholder="Enter Something..." value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="text-5xl text-green-400" onClick={addTodo}>+</button>
    </form>
    </div>
    <div className="flex flex-col justify-start my-2 ml-2 space-y-4">
      {todos.map((item, id) => (
        <div className="flex flex-row space-x-2" id={id}>
        <h4 className="flex-none w-80 rounded-md text-2xl text-stone-300 break-all bg-sky-600" id={id}>{item}</h4>
        <button className="p-1 text-3xl text-red-500 bg-white rounded-lg" id={id} onClick={() => delTodo(id)}>x</button>
        </div>
      ))
      }
    </div>
    </>
    )
}

export default Todo;