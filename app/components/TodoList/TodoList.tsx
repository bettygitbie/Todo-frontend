import React, { useEffect, useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

function TodoList() {
  interface Todo {
    id: number;
    title: string;
    color: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]);
  const completedCount = todos.filter((todo) => todo.completed).length;
  
  async function fetchTodo() {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Unable to fetch todos", error)
    }
   
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleTodoChange = async (id: number, completed: boolean) => {
    try {
     await axios.put(`http://localhost:5000/api/todos/${id}`, {
        completed: !completed,
      });
      fetchTodo()
    } catch (error) {
      console.error('Error updating todo', error)
    }
    

  };
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/todos`, {data:{id}}
      );
      fetchTodo();
    } catch (error) {
      console.error('Error deleting todo',error)
    }
  };
  return (
    <div>
      <div className="border-b-2 border-gray-700 ">
        <h3 className="font-bold flex justify-between mt-10 mb-5">
          <span className="text-cyan-500">
            Tasks
            <span className="m-2 bg-gray-700 rounded-lg px-1 text-white">
              {todos.length ? todos.length : "0"}
            </span>{" "}
          </span>{" "}
          <span className="text-indigo-500">
            Completed
            <span className="m-2 bg-gray-700 rounded-lg px-1 text-gray-300">
              {todos.length ? completedCount : "0"}
            </span>
          </span>
        </h3>
      </div>
      <div>
        {todos.length ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="p-4 bg-gray-600 m-2 rounded-lg ">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleTodoChange(todo.id, todo.completed)}
                />
                <span
                  className="pl-2"
                  style={{
                    color: todo.color,
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
                <button style={{ float: "right" }} onClick={()=>handleDelete(todo.id)}>
                  <DeleteIcon />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500 py-10 text-center">
            <AssignmentIcon />
            <p className="mb-3">You don't have any tasks registered yet.</p>
            <p>Create tasks and organize your to-do items.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
