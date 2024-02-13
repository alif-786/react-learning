import React, { useState,useContext } from 'react'
import Usercontext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState()

    // get the context which we are sending from the UserContextProvider
    const { setUser } = useContext(Usercontext)


    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({ username, password })
       setUsername("")
       setPassword("")
    }
  return (
      <div className="bg-gray-100 text-black p-4 flex justify-center items-center flex-col space-y-5 border-2 border-black rounded-md w-fit">
          <h1>Login</h1>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='username'
              className='p-2 border-2 rounded-md'
          />
          <input
              type="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}   
              className='p-2 border-2 rounded-md'
          />
          <button
              onClick={handleSubmit}
                className='bg-green-700 text-black font-bold hover:bg-green-600 px-4 py-2 rounded-lg'      
          >Submit</button>
    </div>
  )
}

export default Login