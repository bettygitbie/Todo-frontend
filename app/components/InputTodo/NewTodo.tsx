import React, { useState } from "react";
import axios from "axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChooseColor from "../ChooseColor/ChooseColor";


interface NewTodo {
    title: string;
    color: string;
  }

function NewTodo() {
  const [newTodo, setNewTodo] = useState<NewTodo>({ title: "", color: "" });
  const [success,setSuccess] = useState(false)
  const handleAddTask = async () => {

    try {
      const response = await axios.post("http://localhost:5000/api/todos", {
        title: newTodo.title,
        color: newTodo.color,
      });
      setSuccess(true)
      console.log("Todo added:", response.data);
    } catch (error) {
      console.error('Unable to add new todo',error)
    }
    
  };

  const onSelectColor = (color:string)=>{
    setNewTodo({...newTodo, color})
  }
  return (
    <div className="m-4 flex flex-col p-2 text-cyan-500 font-semibold">
      {success ? <span style={{color:'red',textAlign:'center'}}>Todo Added</span> : null }
      <label htmlFor="title">Title:</label>
      <input
        placeholder="Ex. Walk the dog"
        className=" text-white p-4 bg-gray-700 font-normal rounded-lg mb-4"
        name="title"
        type="text"
        required
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <label htmlFor="color">Color:</label>
      <ChooseColor handleColorChange={onSelectColor}/>
      <button
        onClick={handleAddTask}
        className="bg-cyan-600 w-full p-4 rounded-lg font-semibold text-white"
      >
        Add Task <AddCircleOutlineIcon />
      </button>
    </div>
  );
}

export default NewTodo;
