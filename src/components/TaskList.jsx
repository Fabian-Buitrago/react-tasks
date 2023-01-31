import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>There are not tasks</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
