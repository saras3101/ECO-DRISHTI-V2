import React from 'react'
import Login from './Auth/Login'
import Header from './components/Header'
import ActiveAlerts from './alertCards/ActiveAlerts'
import ActiveFeeds from './alertCards/ActiveFeeds'
import AlertSections from './components/AlertSections'
import NotificationCentre from './components/NotificationCentre'
import TabsSection from './components/TabsSections'
import VideoFeeds from './components/VideoFeeds'

const App = () => {
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

export default App

