import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className="fixed bottom-12 flex flex-wrap 
      justify-center inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"red"}}
          onClick={()=>setColor("red")}
          >Red</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"green"}}
          onClick={()=>setColor("green")}
          >Green</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"purple"}}
          onClick={()=>setColor("purple")}
          >Purple</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"aqua"}}
          onClick={()=>setColor("aqua")}
          >Aqua</button>
        </div>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"orange"}}
          onClick={()=>setColor("orange")}
          >Orange</button>
        </div>

        </div>
    </div>
    </>
      )
}

export default App
