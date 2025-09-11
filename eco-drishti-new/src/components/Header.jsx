import { Shield, RefreshCw } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (

    <div className=' bg-card '>
    <div className='flex justify-between items-center mt-4 mx-6 mb-4'>
        <div className='flex items-center gap-3'>
          <Shield  className='h-8 w-8  '/>
          <div className='flex-col'>
            <h1 className='items-center text-[1.5em] font-semibold leading-none '>ECO-DRISHTI</h1>
            <h3 className=''>Garbage Detection System</h3>  
          </div>       

        </div>

        <div className='items-center flex '>
           <button className=' h-10 w-28 mt-3 mb-3 mx-1  text-l items-center border rounded hover:bg-gray-200'>
            <div className='flex flex-row justify-center items-center '>
                <RefreshCw className="w-4 h-4 mr-2 " /> Refresh
            </div>
           </button>
           <button className=' h-10 w-28 mt-3 mb-3 mx-1 px-1 py-1  hover:bg-gray-200  border rounded'>Log Out</button>
        </div>
      </div>

    </div>
      
  )
}

export default Header
