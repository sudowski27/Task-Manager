import { useState } from "react";
import { useNavigate } from 'react-router-dom';

type RemoveTasksProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RemoveTask({isDark, setIsDark}: RemoveTasksProps) {
    const [taskID, setTaskID] = useState("");
    const navigate = useNavigate()

    const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
    } | null>(null);

    const handleRemoveTask = async () => {
        try {
        const response = await fetch(`http://localhost:8080/tasks/${taskID}`, {
          method: "DELETE"
        });

        if (!response.ok) {
          throw new Error("Failed to remove task");
          console.log(response);
        }

        console.log(response.status)

        setTaskID("");

        setNotification({
            message: "Task removed successfully!",
            type: "success",
        });

        } catch (error) {

        setNotification({
            message: "Error while removing task",
            type: "error",
        });
        setTaskID("");
        }

        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };


    return(
        <div>
            <button
                className="
                    py-2
                    px-4
                    rounded-md
                    transition
                "
                style={
                    {
                        backgroundColor: "var(--button-bg)",
                        color: "var(--text-color)"
                    }
                }
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
                    ">
                    <h1 className="text-x1 font-semibold text-green-900 text-center">
                        Remove Task
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter task ID..."
                        value={taskID}
                        onChange={(e) => setTaskID(e.target.value)}
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
          onClick={handleRemoveTask}
        >
          Remove Task
        </button>
                </div>
            </div>

        {notification && (
            <div className="fixed top-6 right-6 z-50">
                <div
                    className={`
                        min-w-[250px]
                        px-4 py-3
                        rounded-lg
                        shadow-lg
                        text-white
                        transform transition-all duration-300
                        animate-slide-in
                        ${
                            notification.type === "success"
                                ? "bg-green-600"
                                : "bg-red-600"
                        }
                    `}
                >
                    <div className="flex justify-between items-center gap-4">
                        <span>{notification.message}</span>
                        <button
                            onClick={() => setNotification(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        )}
        </div>
        
    );
}
