import React from 'react'

const Login = () => {

    
  return (
    <div className='justify-center items-center flex  h-screen w-screen '>
    <div  className=' border-2 p-20 border-black'>
      <form className='flex flex-col px-3 py-3 mt-3 mb-3'>
        <input className="px-3 py-2 flex mt-3 mb-3 border-1 text-l placeholder: text-gray" type='email' placeholder='Enter email'/>
        <input className=' px-3 py-2 flex mt-3 mb-3 border-1 text-l placeholder:text-gray '  type='password' placeholder='Enter password'/>
        <button className='px-3 py-2 justify-center mt-3 mb-3 bg-amber-50 text-white '>LOG IN</button>

      </form>
      </div>
    </div>
  )
}

export default Login
