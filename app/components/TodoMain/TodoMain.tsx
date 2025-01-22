"use client";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TodoList from "../TodoList/TodoList";
import NewTodo from "../InputTodo/NewTodo";

function TodoMain() {
  const [toggleTodo, setToggleTodo] = useState(false);
  const handleNewTask = () => {
    setToggleTodo(!toggleTodo);
  };

  const handleBack = () =>{
    setToggleTodo(!toggleTodo)
  }
  return (
    <div className="px-40 ">
       {toggleTodo ? (
        <>
         <button
        className="bg-cyan-600 p-4 rounded-lg font-semibold"
        onClick={handleBack}
      >
        <ArrowBackIcon /> Back
      </button>
        <NewTodo /> 
        </>
       ) : (
        <>
         <button
        className="bg-cyan-600 w-full p-4 rounded-lg font-semibold"
        onClick={handleNewTask}
      >
        Create Task <AddCircleOutlineIcon />
      </button>
      <TodoList />
        </>
       ) }
     
      
    </div>
  );
}

export default TodoMain;
