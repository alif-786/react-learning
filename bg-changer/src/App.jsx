import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
const [color, setColor] = useState("black")

  return (
    <main className={`h-screen w-full bg-${color} text-white  transition-all duration-700`}>
      <div className='flex justify-center'>
        <div className='flex flex-wrap gap-x-4 rounded-md border-gray-100 backdrop-blur-sm bg-white/90 dark:bg-gray-900/70 dark:border-gray-700 fixed min-w-fit top-1 z-30 p-4'>
          <button className='p-4 bg-red-600'>red</button>
         <Button title="red" color="red" />
         <Button title="blue" color="blue" />
            </div>
      </div>


   </main>
  )
}



export default App
