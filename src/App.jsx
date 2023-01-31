import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = ({ title, description }) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
