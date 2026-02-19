import { useState } from "react";
import { useNavigate } from 'react-router-dom';

type AddNewTaskProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewTask = ({ isDark, setIsDark }: AddNewTaskProps) => {
  const [message, setMessage] = useState<string | null>(null); // TODO remove
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);  // TODO remove
  const [notification, setNotification] = useState<{
  message: string;
  type: "success" | "error";
} | null>(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("low");
  const navigate = useNavigate()

  const handleAddTask = async () => {
    const taskData = {
    title: taskName,
    description: taskDescription,
    date: taskDate,
    priority: priority,
    };

    try {
    const response = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error("Failed to add task");
    }

    await response.json();

    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
    setPriority("low");

    setMessage("Task added succesfully!")  // TODO remove
    setMessageType("success")  // TODO remove
    setNotification({
    message: "Task added successfully!",
    type: "success",
  });

    } catch (error) {
    setMessage("Error while adding task.")
    setMessageType("error")
    }

    setTimeout(() => {
        setMessage(null);
        setMessageType(null);
    }, 3000);
  };

  return (
    <div>
        <button
          className="
            py-2
            px-4
            rounded-md
            transition
          "
          style={{
            backgroundColor: "var(--button-bg)",
            color: "var(--text-color)"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--button-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--button-bg)")}
          onClick={() => setIsDark(v => !v)}
        >
          Change theme
        </button>
        <button
          className="
            bg-blue-600
            text-white
            py-2
            px-4
            rounded-md
            hover:bg-gray-800
            transition
          "
          style={{
            backgroundColor: "var(--button-bg)",
            color: "var(--text-color)"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--button-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--button-bg)")}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
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
                text-black
              "
            />

            <input
              type="text"
              placeholder="Enter task description..."
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="
                w-full
                px-3 py-2
                rounded-md
                border border-green-400
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
                text-black
              "
            />

            <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="
                w-full
                px-3 py-2
                rounded-md
                border border-green-400
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
                text-black
                "
            />
            <p className="mb-2 text-sm text-gray-600">Priority:</p>

            <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="priority"
                        value="low"
                        checked={priority === "low"}
                        onChange={(e) => setPriority(e.target.value)}
                        className="
                          w-4 h-4
                          text-green-500
                          border-green-400
                          focus:ring-green-500
                        "
                    />
                    <span className="text-black">Low</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="priority"
                        value="medium"
                        checked={priority === "medium"}
                        onChange={(e) => setPriority(e.target.value)}
                        className="
                          w-4 h-4
                          text-green-500
                          border-green-400
                          focus:ring-green-500
                        "
                    />
                    <span className="text-black">Medium</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="priority"
                        value="high"
                        checked={priority === "high"}
                        onChange={(e) => setPriority(e.target.value)}
                        className="
                          w-4 h-4
                          text-green-500
                          border-green-400
                          focus:ring-green-500
                        "
                    />
                    <span className="text-black">High</span>
                </label>
            </div>

            <button
              className="
                bg-green-600
                text-white
                py-2
                rounded-md
                hover:bg-green-700
                transition
              "
              style={{
                color: "var(--text-color)"
           }}
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
        {message && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <div
                    className={`
                                px-6 py-4 rounded-lg shadow-lg text-white
                                ${messageType === "success" ? "bg-green-600" : "bg-red-600"}
                              `}
                >
                {message}
                </div>
            </div>
        )}
    </div>
  );
};

export default AddNewTask;
