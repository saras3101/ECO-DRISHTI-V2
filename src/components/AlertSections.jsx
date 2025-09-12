import React from 'react'
import ActiveFeeds from '../alertCards/ActiveFeeds'
import ActiveAlerts from '../alertCards/ActiveAlerts'
import DetectionsInLastDay from '../alertCards/DetectionsInLastDay'


const AlertSections = () => {
  return (
    <div className=' flex flex-row gap-2 m-4'>
    <ActiveAlerts />
    <ActiveFeeds /> 
    <DetectionsInLastDay />   
      
    </div>
  )
}

export default AlertSections
