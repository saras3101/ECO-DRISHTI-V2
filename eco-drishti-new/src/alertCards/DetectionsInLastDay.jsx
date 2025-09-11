import React from 'react'
import { Activity, TriangleAlertIcon } from 'lucide-react'

const DetectionsInLastDay = () => {
  return (
    <div className=' border-[0.2px] border-gray-300 w-1/3 h-35 rounded'>
        <div className='px-6 py-4 items-center'>
            <div className='flex justify-between mb-2' >
            <h4 className='font-semibold'>Last 24 Hours Detections</h4>
                <Activity className='h-6 w-6 text-green-400' />
                

            </div>
            <div className=''> 
                <h1 className='font-bold text-3xl'>8</h1>
                <button className='bg-black text-white px-3 py-1 mt-2 mb-2 text-[12px] rounded-2xl'>Refresh</button>

            </div>
        </div>      
    </div>
  )
}

export default DetectionsInLastDay
