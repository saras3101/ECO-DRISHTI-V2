import React from 'react'
import { Clock, MapPin, Camera, ExternalLink } from 'lucide-react'

const Notifs = () => {
    const handleHandle = () =>{
        window.open('/notif-dashboard', '_blank', 'noopener,noreferrer')

    }
  return (
    <div>
      <div className="bg-gray-100 border border-gray-400 rounded mt-3 flex flex-col gap-1 p-4">
            <div className="flex justify-between ">
              <div className="flex gap-2 items-center">
                <p className="bg-black rounded-full text-white px-2 py-1 text-xs font-medium">
                  Confidence: 70%
                </p>
                <p className="bg-white rounded-full border text-black px-2 py-1 text-xs font-medium">
                  Feed: feed-3
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Clock className="text-gray-500 h-4 w-4" />
                <p className="text-gray-500 text-sm">17/09/2025</p>
                <p className="text-gray-500 text-sm">11:59 PM</p>
              </div>
            </div>
            <div className="flex mt-2 gap-1 items-center">
              <MapPin className="text-gray-500 h-4 w-4" />
              <div className='flex gap-2 justify-center items-center'>
                <p className="text-sm font-semibold">Main Street Avenue</p>
              <button onClick={handleHandle} className='bg-white rounded p-1 '><ExternalLink  className='w-4 h-4'/></button>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                Co-ordinates: 40.712800, -74.006000
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Camera className="text-gray-500 h-4  w-4" />
              <p className="text-gray-500 text-sm">No image Found</p>
            </div>
          </div>
    </div>
  )
}

export default Notifs
