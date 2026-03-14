import { useState } from "react";
import TaskPageContent from "../components/TaskPageContent";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Practice hooks and component patterns",
    },
    {
      id: 2,
      title: "Build Portfolio",
      description: "Create personal website",
    },
    {
      id: 3,
      title: "Workout",
      description: "Go to the gym",
    },
  ]);

    return (
        <div className="TaskPageContent">
            <TaskPageContent/>
        </div>
    );
};
