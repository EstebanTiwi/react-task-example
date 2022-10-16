// imp -> import
import TaskCard from "./TaskCard";
// clg -> console.log()
// console.log(tasks);
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

// rfce
function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard task={task} key={i} />
      ))}
    </div>
  );
}

export default TaskList;
