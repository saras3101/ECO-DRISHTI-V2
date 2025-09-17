import React from 'react'
import AdminDashBoard from './DashBoards/AdminDashBoard'
import CamFeedDashBoard from './DashBoards/CamFeedDashBoard'
import NotificationDashBoard from './DashBoards/NotificationDashBoard'
import Header from './components/Header'
import Login from './Auth/Login'
import { useState } from 'react'

const App = () => { 
  
  const [user, setUser] = useState(false)
  const handleLogin = (email, password) =>{
    if(email === 'admin@gmail.com' && password === 'saras'){
      setUser(true)
      console.log('Logged in')
    }else{
      setUser(false)
      console.log('Sorry some mistake')
    }

  }


  return ( 

    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user == true && <AdminDashBoard />}
    </div>
    
    
  )
}

export default App

