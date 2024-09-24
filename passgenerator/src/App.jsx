import React, { useState, useEffect, useCallback } from 'react';
import { useRef } from 'react';


function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [pass, setpass] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_{|}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpass(pass);
  }, [length, numAllowed, charAllowed, setpass]);
   
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(pass);
  },[pass])

  //useRef hook
  const passwordRef = useRef(null);

   useEffect(() => {
    passwordGenerator()
   },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 border-none"
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-1"
            
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max = {100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}/>

          <label>
            Length: {length}
          </label>
        </div> 
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
               //flipping true/false
            onChange={()=>{
              setnumAllowed((prev)=>!prev)
            }
          }
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked = {charAllowed}
          id="characterInput"
          onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}
          />
            <label htmlFor="characterInput">Characters</label>
        </div>
        </div>

      </div>
    </>
  );
}

export default App;
