import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { darkTheme, lightTheme } from './theme/themes'
import { applyTheme } from './theme/applyTheme'

import Home from './pages/Home'
import AddNewTask from './pages/AddNewTask'
import TasksPage from './pages/ViewMyTasks'
import RemoveTask from './pages/RemoveTask'
import Statistics from './pages/Statistics'

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    applyTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return (
    <Routes>
        <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark}/>}/>
        <Route path="/add_new_task" element={<AddNewTask isDark={isDark} setIsDark={setIsDark}/>} />
        <Route path="/view_my_tasks" element={<TasksPage isDark={isDark} setIsDark={setIsDark}/>} />
        <Route path="/remove_task" element={<RemoveTask isDark={isDark} setIsDark={setIsDark}/>} />
        <Route path="/statistics" element={<Statistics isDark={isDark} setIsDark={setIsDark}/>} />
    </Routes>
  )
}

export default App
