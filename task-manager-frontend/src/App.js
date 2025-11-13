import React, { useEffect, useState } from "react";
import axios from "axios";


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const username = "user";
  const password = "a2f05f35-5e73-4300-9577-7f83e5baefb6";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tasks", {
          auth: {
            username,
            password,
          },
          withCredentials: true, // allow credentials / basic auth
          headers: {
            "Content-Type": "application/json",
          },
        });

        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        // Handle cases where no response is available (e.g. network error)
        setError(
          err.response
            ? `HTTP ${err.response.status}: ${err.response.statusText}`
            : err.message
        );
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Raw JSON Task List</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}


function TaskListDebug() {
    const username = "user";
    const password = "c0b3a01e-7f21-4ee7-8459-70c8f315498b"
    axios.get("http://localhost:8080/tasks", {
    auth: {
        username: "user",
        password: "951b7b1d-1d01-460e-ac08-4aca15d106db"
    },
    withCredentials: true
})
.then(res => console.log(res.data))
.catch(err => console.error(err));

}

// export default TaskListDebug;
export default TaskList;
