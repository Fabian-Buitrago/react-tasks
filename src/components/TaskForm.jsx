import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Create your task</h1>
        <input
          placeholder="Enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Create</button>
      </form>
    </div>
  );
}

export default TaskForm;
