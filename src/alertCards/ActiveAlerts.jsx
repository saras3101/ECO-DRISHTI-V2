import { TriangleAlertIcon } from 'lucide-react'
import React from 'react'

const ActiveAlerts = () => {
  return (
    <div className=' border-[0.2px] border-gray-300 w-1/3 h-35 rounded'>
        <div className='px-6 py-4 items-center'>
            <div className='flex justify-between mb-2' >
            <h4 className='font-semibold'>Active Alerts</h4>
                <TriangleAlertIcon className='h-7 w-7 text-red-400' />
                

            </div>
            <div className=''> 
                <h1 className='font-bold text-3xl'>4</h1>
                <button className='bg-black text-white px-3 py-1 mt-2 mb-2 text-[12px] rounded-2xl'>Refresh</button>

            </div>
        </div>      
    </div>
  )
}

export default ActiveAlerts
