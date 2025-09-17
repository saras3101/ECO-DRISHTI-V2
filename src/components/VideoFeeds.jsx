import CamFeedDashBoard from '@/DashBoards/CamFeedDashBoard';
import { Camera, ExternalLink, Pause, Play } from 'lucide-react'
import React from 'react'
import { useState } from 'react';

const VideoFeeds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () =>{
    setIsPlaying(!isPlaying);

  };
  const openPage = () =>{
    window.open('/cam-dashboard', '_blank', 'noopener,noreferrer')
    
  }


  return (
     <div className='bg-white rounded-lg border shadow-md h-auto'>
      <div className='flex flex-wrap justify-between m-4'>
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
              <h3 className='font-semibold text-2xl'>Main Street Camera</h3>
              <button onClick={openPage} className=' border border-gray-200 rounded p-1 hover:bg-gray-100'><ExternalLink className='h-5 w-5' /></button>
            </div>
            <h1 className=' mt-1 my-3'>Camera ID: 230978</h1>

        </div>
        <div className='m-2'>
            {isPlaying ? (<p className='bg-red-500 font-semibold rounded-full py-1 px-3 text-white  text-xs justify-center '>Online</p>) : (<p className='bg-gray-300 font-semibold rounded-full py-1 px-3 text-xs justify-center '>Offline</p>) 
            }
        </div>
      </div>
      <div className='bg-gradient-to-br from-slate-800 to-slate-900 relative  flex items-center justify-center aspect-video m-3 rounded'>
        {isPlaying ? 
        (<div className=' flex flex-col justify-center items-center'>
            <Camera className='text-white text-center' />
            <p className='text-white'>Feed online</p>
          </div>)
            :
          (<div className=' flex flex-col justify-center items-center'>
            <Camera className='text-gray-500 text-center' />
            <p className='text-gray-500 font-normal'>Feed offline</p>
          </div>)
        }

        
        <div className=' absolute left-2 bottom-2'>
            <button onClick={handlePlay} className=''>
                {isPlaying ? (<Pause className='text-white h-5 w-5 '/> ): (<Play className='text-white h-5 w-5 '/>)}
            </button>
        </div>
        
      </div>

    </div>
  )
}

export default VideoFeeds
