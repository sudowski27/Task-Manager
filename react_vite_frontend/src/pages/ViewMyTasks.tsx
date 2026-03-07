import { useState } from "react";

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
        <div className="flex items-center justify-center h-screen">
            <div className="box-content size-400 p-4 bg-linear-to-r/srgb from-indigo-500 to-teal-400 flex items-center justify-center-safe">
                <div>
                    <div className="w-97 h-5 bg-green-700 rounded-full border border-green-700 border-dashed divide-x-3 divide-dotted divide-green-800 grid grid-cols-3">
                            <div className="text-[12px] underline text-center">ID</div>
                            <div className="text-[8px] text-center">TITLE</div>
                            <div className="text-[8px] text-ellipsis text-left">DESCRIPTION</div>
                        </div>
                    <div className="overflow-y-scroll size-100">
                        {/*
                           <div> ECHO</div>
                           <div className="size-14 flex-none ...">01</div>
                        */}
                        <div className="w-97 h-10 bg-green-200 rounded-full border border-green-700 border-dashed divide-x-3 divide-dotted divide-green-800 grid grid-cols-3">
                            <div className="text-[12px] underline text-center">1</div>
                            <div className="text-[8px] text-center">Learn React</div>
                            <div className="text-[8px] text-ellipsis text-left">Practice hooks and component patterns</div>
                        </div>
                    </div>
                </div>
            </div>
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
}
