import { useState,useCallback,useEffect,useRef } from "react"
import { Toaster, toast } from 'sonner'

function App() {
  const [password, setPassword] = useState('');

  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  

  // useRef hook 
  const passRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
   toast.success('Password copied');
 },
   [password] )
 

  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let char = "!@#$%^&*()_+-<>/?";
    if (numberAllowed) str += num;

    if (characterAllowed) str += char;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      setPassword(pass);
    }
  }, [length, numberAllowed, characterAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <main className="flex justify-center items-center min-h-screen w-full bg-black">
       
      <div className="fixed top-2">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-900 inline-block text-transparent bg-clip-text mb-5">Password Generator</h1>
        <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4 flex flex-col justify-center space-y-2 min-w-[350px]">

          <div className="flex justify-center space-x-2">
            <input type="text"
              value={password}
              readOnly
              ref={passRef}
              className="flex-1 p-2 text-gray-700 outline-green-500 outline-offset-2 font-bold text-xl"
              placeholder="Password" />
            <button
              className="rounded-md border-2 border-green-800 bg-green-800 bg-opacity-20 hover:bg-green-600 px-4 py-2 font-bold text-white"
              onClick={copyPasswordToClipboard}
            >Copy</button>
          </div>

          <div className="flex justify-center space-x-3 w-full mt-8 accent-green-700">
            <div className="flex items-center space-x-2">
              <input type="range" name="pLength" id="pLength"
                min={10}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="pLength" className="text-white">Length:{length}</label>
            </div>

            <div className="flex items-center space-x-1 justify-center">
              <input type="checkbox"
                defaultChecked={characterAllowed}
                name="character"
                id="character"
                className=" shrink-0 w-4 h-4 border-2 border-green-600  mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-green-700
        checked:bg-green-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400 rounded-md"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="character" className="text-white text-md">character</label>
            </div>

            <div className="flex items-center space-x-1 justify-center">
              <input type="checkbox"
                defaultChecked={numberAllowed}
                name="number"
                id="number"
                className=" w-4 h-4 border-2 border-green-600  mt-1 bg-white
                    focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-green-700
                   checked:bg-green-500 rounded-full"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="number" className="text-white text-md">Number</label>
            </div>

            

          </div>

        </div>
      </div>
  
      
      <Toaster
        position="top-right"
        richColors
        closeButton
          toastOptions={{
              style: {
                        background: '#d9f99d',
                  color: '#000',
              },
              className: 'class',
            }}
 />
    </main>
  );
}



export default App
