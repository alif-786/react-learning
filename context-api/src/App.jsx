import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-green-600 text-black p-4'>React useContext tut</h1>
      <div
        className="h-screen w-full flex justify-center items-center flex-col rounded-md space-y-3"
      ><Login />
      <Profile /></div>
    </UserContextProvider>
  )
}

export default App
