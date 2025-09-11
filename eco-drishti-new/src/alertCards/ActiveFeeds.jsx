import React from 'react'
import { Badge, Camera, TriangleAlertIcon } from 'lucide-react'


const ActiveFeeds = () => {
  return (
    <div className=' border-[0.2px] border-gray-300 w-1/3 h-35 rounded'>
        <div className='px-6 py-4 items-center'>
            <div className='flex justify-between mb-2' >
            <h4 className='font-semibold'>Active Feeds</h4>
                <Camera className='h-7 w-7 text-gray-400 ' />
                

            </div>
            <div className=''> 
                <h1 className='font-bold text-3xl'>4/4</h1>
                <button className='bg-black text-white px-3 py-1 mt-2 mb-2 text-[12px] rounded-2xl'>100% Online</button>
            </div>
        </div>      
    </div>
  )
}

export default ActiveFeeds
