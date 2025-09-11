import { Camera, Play } from 'lucide-react'
import React from 'react'

const VideoFeeds = () => {
  return (
    <div className='flex flex-row gap-4 m-4'>
        <div className='bg-white rounded-lg border w-1/2 h-auto shadow-md'>
      <div className='flex flex-wrap justify-between m-2'>
        <div className='flex flex-col'>
            <h3 className='font-semibold text-2xl'>Main Street Camera</h3>
            <h1 className=' mt-1 my-3'>Park Avenue Street</h1>

        </div>
        <div className='m-2'>
            <p className='bg-gray-300 font-semibold rounded-full py-1 px-3 text-sm justify-center '>Offline</p>
        </div>
      </div>
      <div className='bg-slate-950 relative  flex items-center justify-center aspect-video m-3 rounded'>
        <div className=' flex flex-col justify-center items-center'>
            <Camera className='text-gray-300 text-center '/>
            <p className='text-white'>Feed Offline</p>
        </div>
        <div className=' absolute left-2 bottom-2'>
            <button className=''>
                <Play className='text-white '/>
            </button>
        </div>
        
      </div>
    </div>
    <div className='bg-white rounded-lg border w-1/2 h-auto shadow-md'>
      <div className='flex flex-wrap justify-between m-2'>
        <div className='flex flex-col'>
            <h3 className='font-semibold text-2xl'>Main Street Camera</h3>
            <h1 className=' mt-1 my-3'>Park Avenue Street</h1>

        </div>
        <div className='m-2'>
            <p className='bg-gray-300 font-semibold rounded-full py-1 px-3 text-sm justify-center '>Offline</p>
        </div>
      </div>
      <div className='bg-slate-950 relative  flex items-center justify-center aspect-video m-3 rounded'>
        <div className=' flex flex-col justify-center items-center'>
            <Camera className='text-gray-300 text-center '/>
            <p className='text-white'>Feed Offline</p>
        </div>
        <div className=' absolute left-2 bottom-2'>
            <button className=''>
                <Play className='text-white '/>
            </button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default VideoFeeds
