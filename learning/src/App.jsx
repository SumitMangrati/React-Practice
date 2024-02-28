import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(0)
  const [number , setNumber ] = useState(false)
  const [char , setChar] = useState(false)
  const [password , setPassword] = useState('')

  //useRef for copying the password
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback (()=>{
    let pass =  '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(number){
      str += '1234567890'
    }
    if(char){
      str += '!@#$%^&*()_+'
    }

    for (let i=0 ; i<length ; i++){

      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt (char);

    }

    setPassword(pass);

  } , [length , number , char , setPassword]);


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordGenerator()
  } , [length ,  number , char , passwordGenerator ])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-300'>
        <h1 className='text-2xl text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef} />

           <button
           onClick={copyPassword}
           className='p-2 outline-none bg-blue-300 shrink-0'>Copy</button>
        </div>

        <div className=' flex text-sm gap-x-2'>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className=' cursor-pointer'
           onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>


            <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={number}
           id="numberInput"
           onChange={()=>{
            setNumber(!number);
           }} />
           <label>Numbers</label>
        </div>

        <div>
        <input
           type="checkbox"
           defaultChecked={char}
           id="numberInput"
           onChange={()=>{
            setChar(!char);
           }} />
           <label>Characters</label>
        </div>


        </div>
      </div>
    </>
  )
}

export default App
