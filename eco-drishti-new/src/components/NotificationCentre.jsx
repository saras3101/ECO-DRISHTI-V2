import React from 'react'
import {TriangleAlertIcon} from 'lucide-react'

const NotificationCentre = () => {
  return (
    <div  className='border border-gray-300  mt-4 mb-4 h-auto  mx-2 md:mx-4 rounded '>
      <div className='p-3'>
        <div className='flex font-semibold items-center gap-3 mb-3 mx-2'>
            <TriangleAlertIcon />
            <h5 className='text-l'>Alert System</h5>
        </div>
        <div className='flex gap-3 mt-2 flex-wrap'>
            <p className='bg-gray-300 font-semibold rounded-full py-1 px-3 text-sm justify-center '>0 Active Alerts</p>
            <button className='py-1 px-3 text-sm justify-center bg-gray-300 rounded-full '>Notifications: On</button>
        </div>
        <div className='border border-gray-300 rounded-l  mt-3 h-auto'>
            <h2 className='p-4'>No Alert. System is monitoring feeds.</h2>
        </div>

      </div>
    </div>
  )
}

export default NotificationCentre
