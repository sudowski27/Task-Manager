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


  // const handleSwipe = (direction, id) => {
    // console.log(`Swiped ${direction} on task ${id}`);
    // setTasks((prev) => prev.filter((task) => task.id !== id));
  // };

  // return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
      // <div className="relative w-80 h-96">
        // <AnimatePresence>
          // {tasks.map((task) => (
            // <motion.div
              // key={task.id}
              // drag="x"
              // dragConstraints={{ left: 0, right: 0 }}
              // onDragEnd={(event, info) => {
                // if (info.offset.x > 100) {
                  // handleSwipe("right", task.id);
                // } else if (info.offset.x < -100) {
                  // handleSwipe("left", task.id);
                // }
              // }}
              // initial={{ scale: 0.9, opacity: 0 }}
              // animate={{ scale: 1, opacity: 1 }}
              // exit={{ x: 300, opacity: 0 }}
              // transition={{ type: "spring", stiffness: 300, damping: 20 }}
              // className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between cursor-grab"
            // >
              // <h2 className="text-xl font-bold">{task.title}</h2>
              // <p className="text-gray-600">{task.description}</p>
            // </motion.div>
          // ))}
        // </AnimatePresence>
      // </div>
    // </div>
  // );
};
