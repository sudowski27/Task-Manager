import { useState } from "react";

const AddNewTask = () => {
  const [taskName, setTaskName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="
          w-80
          bg-green-200
          rounded-xl
          shadow-lg
          p-6
          flex flex-col
          gap-4
        "
      >
        <h1 className="text-xl font-semibold text-green-900 text-center">
          Add New Task
        </h1>

        <input
          type="text"
          placeholder="Enter task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="
            w-full
            px-3 py-2
            rounded-md
            border border-green-400
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
          "
        />

        <button
          className="
            bg-green-600
            text-white
            py-2
            rounded-md
            hover:bg-green-700
            transition
          "
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddNewTask;
