import React from 'react'
import Header from '@/components/Header'
import AlertSections from '@/components/AlertSections'
import NotificationCentre from '@/components/NotificationCentre'
import TabsSection from '@/components/TabsSections'


const AdminDashBoard = () => {
  return (
    <div>
    <Header />
    <AlertSections />
    <NotificationCentre />
    <TabsSection />
    {/* <VideoFeeds /> */}
    


    </div>
  )
}

export default AdminDashBoard
