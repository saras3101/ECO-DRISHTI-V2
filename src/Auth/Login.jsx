import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email, password)

  };

    
  return (
    <div className='justify-center items-center flex  h-screen w-screen '>
    <div  className=' border-2 p-20 border-black'>
      <form 
      onSubmit= { (e) => {submitHandler(e)}}
      className='flex flex-col px-3 py-3 mt-3 mb-3'>
        <input 
        value={email}
        onChange={(e) =>{
          setEmail(e.target.value)
        }}
        className="px-3 py-2 flex mt-3 mb-3 border text-gray-900 rounded text-l placeholder: text-gray-400" type='email' placeholder='Enter email'/>
        <input 
        value={password}
        onChange = {(e) =>{
          setPassword(e.target.value)
          
        }}
        className=' px-3 py-2 flex mt-3 mb-3 border rounded  text-l placeholder:text-gray-400'  type='password' placeholder='Enter password'/>
        <button className='px-3 py-2 justify-center mt-3 mb-3 bg-emerald-400 rounded text-white '>LOG IN</button>

      </form>
      </div>
    </div>
  )
}

export default Login
