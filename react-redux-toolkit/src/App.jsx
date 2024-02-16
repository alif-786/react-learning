import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='bg-amber-600 p-4 text-white'>
          hello world
        </h1>
      </div>
    </>
  )
}

export default App
