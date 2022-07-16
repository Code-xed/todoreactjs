import React, { useState } from 'react';

function TodoItem(todos, setTodos) {
  
  const delTodo = (id) => {
    const newtodo = [...todos];
    newtodo.slice(id, 1);
    setTodos(newtodo);
  }
  return (
  <div className="flex flex-col justify-start my-2 ml-2 space-y-4">
      {todos.map((item, id) => (
        <div className="flex flex-row space-x-2" id={id}>
        <h4 className="flex-none w-80 rounded-md text-2xl text-stone-300 break-all bg-sky-600" id={id}>{item}</h4>
        <button className="p-1 text-3xl text-red-500 bg-white rounded-lg" id={id} onClick={() => delTodo(id)}>x</button>
        </div>
      ))
      }
    </div>
    )
}