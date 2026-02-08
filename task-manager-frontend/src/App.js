import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);

  const username = "user";
  const password = "a2f05f35-5e73-4300-9577-7f83e5baefb6";

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tasks", {
        auth: { username, password },
      });

      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);

      setError(
        err.response
          ? `HTTP ${err.response.status}: ${err.response.statusText}`
          : err.message
      );
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;

    try {
      await axios.post(
        "http://localhost:8080/tasks",
        { title: newTask, done: false },
        { auth: { username, password } }
      );

      setNewTask("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`, {
        auth: { username, password },
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTask = async (id, currentDone, title) => {
    try {
      await axios.put(
        `http://localhost:8080/tasks/${id}`,
        { 
            title: title,
            done: !currentDone
        },
        { auth: { username, password } }
      );
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="flex gap-2 mb-4">
        <input
          className="border rounded p-2 flex-1"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id, task.done, task.title)}
              />
              <span
                className={task.done ? "line-through text-gray-500" : ""}
              >
                {task.title}
              </span>
            </div>

            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
