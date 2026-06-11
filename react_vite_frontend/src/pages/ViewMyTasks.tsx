import { useState } from "react";
import TaskPageContent from "../components/TaskPageContent";

type ViewMyTasksProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TasksPage({ isDark, setIsDark }: ViewMyTasksProps) {
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
            <TaskPageContent isDark={isDark} setIsDark={setIsDark}/>
        </div>
    );
};
