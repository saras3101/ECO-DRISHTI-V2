import React from 'react'
import { AlertTriangleIcon, ExternalLink } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotifAdmin = () => {
    const navigate = useNavigate();


    const handleNewPage = () =>{
        navigate('/notif-dashboard')
    }
  return (
    <div>
      <div className="border border-red-500 bg-red-100 mt-4 rounded h-auto flex justify-between">
            <div className="m-3 flex gap-1 ">
              <AlertTriangleIcon className="text-l px-1 py-1 text-red-500" />

              <div>
                <div className='flex gap-2 justify-center items-center'>
                    <p className="font-semibold">Main Street Avenue</p>
                    <button onClick={handleNewPage} className='bg-white rounded p-1 '><ExternalLink  className='w-4 h-4'/></button>
                </div>
                <div className="flex flex-row gap-1">
                  <p className="text-l">Confidence: </p>
                  <p className="text-l ">77%</p>
                </div>
                <div className="mt-1 mb-1 flex gap-2">
                  <p className="text-sm text-gray-400">17/09/2025</p>
                  <p className="text-sm text-gray-400">11:23 PM</p>
                </div>
              </div>
            </div>
            <div className=" m-3 flex flex-col">
              <p className="bg-red-500 rounded-full px-2 py- text-sm text-white text-center">
                New
              </p>
            </div>
          </div>
    </div>
  )
}

export default NotifAdmin
