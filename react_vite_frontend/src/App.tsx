import { React, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { darkTheme, lightTheme } from './theme/themes'
import { applyTheme } from './theme/applyTheme'

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    applyTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return (
    <div className='Navigation'>
      <Navbar onToggle={() => {setIsDark(v => !v); console.log("click");}}/>
    </div>
  )
}

export default App
