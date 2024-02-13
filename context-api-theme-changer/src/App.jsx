import { useState,useEffect } from 'react'
import './App.css'
import {ThemeProvider} from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setTheme] = useState('light')

  const lighTheme = () => { 
    setTheme('light')
  }

  const darkTheme = () => { 
    setTheme('dark')
  }

  // actual theme changing 
// useEffect(() => {
//  document.getElementsByTagName('html').classlist.toggle(themeMode)
// }, [themeMode])


  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode,lighTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
   </ThemeProvider>
  )
}

export default App
