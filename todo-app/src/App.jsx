import { useState } from 'react'
import {TodoProvider } from './context'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  // function for adding todo 
  const addTodo = (todo) => {
    // generated a randome id for the each todo with using the math.random()
    const RandomId = Math.floor(Math.random() * 100000000000)
    setTodos((prev) => [{ id: RandomId, ...todo }, ...prev])
  }

  // function for updating todo 
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id === id ? todo: prevTodo)))
  }

  // functin for deleting todo 
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo) => todo.id !==id ))
  }

  // function for checking if the todo is complete or not
  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id === id ? {...prevTodo, isCompleted:!prevTodo.isCompleted}: prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [third])
  
  return (

    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>

   <div className="bg-[#18181b] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App
