

function App() {

  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-slate-900">
       <div className="fixed top-2">
        <h1 class=" text-2xl font-semibold bg-gradient-to-r from-orange-600  to-orange-900 inline-block text-transparent bg-clip-text">Password Generator</h1>
        <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 flex flex-col justify-center space-y-2 min-w-[350px]">

          <div className="flex justify-center space-x-2">
            <input type="text" className="flex-1 p-2 text-gray-700" placeholder="Password"  />
            <button className="bg-orange-300 hover:bg-orange-700 border-2 border-orange-700 px-4 py-2 font-bold text-black">Copy</button>
          </div>

          <div className="flex justify-center space-x-3 w-full mt-5">
            <div className="flex items-center space-x-2">
              <input type="range" name="pLength" id="pLength"
              min={8}
              max={10} />
              <label htmlFor="pLength" className="text-white">Length</label>            
            </div>
            <div className="flex items-center space-x-1">
              <input type="checkbox" name="character" id="character" />
              <label htmlFor="character" className="text-white text-md">character</label>            
            </div>

            <div className="flex items-center space-x-1">
              <input type="checkbox" name="number" id="number" />
              <label htmlFor="number" className="text-white text-md">number</label>            
            </div>
        
          </div>

        </div>
       </div>
   </main>
  )
}

export default App
