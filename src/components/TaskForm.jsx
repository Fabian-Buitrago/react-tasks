import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>Create</button>
      </form>
    </>
  );
}

export default TaskForm;
