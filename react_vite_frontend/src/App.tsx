import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { darkTheme, lightTheme } from './theme/themes'
import { applyTheme } from './theme/applyTheme'

import Home from './pages/Home'
import AddNewTask from './pages/AddNewTask'

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    applyTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return (
    <Routes>
        <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark}/>}/>
        <Route path="/add_new_task" element={<AddNewTask isDark={isDark} setIsDark={setIsDark}/>} />
    </Routes>
  )
}

export default App
