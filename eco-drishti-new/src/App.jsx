import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AdminDashBoard from './DashBoards/AdminDashBoard'
import CamFeedDashBoard from './DashBoards/CamFeedDashBoard'
import NotificationDashBoard from './DashBoards/NotificationDashBoard'
import Header from './components/Header'
import Login from './Auth/Login'
import { useState } from 'react'

const App = () => { 

  const ProtectedView = ({children, user}) => {
    return user ? children : <Navigate to='/login' replace />
  }
  
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
  {/* {!user && <Login handleLogin={handleLogin} />}
      {user == true && <AdminDashBoard />} */}

  return ( 

    <div>
      <Routes>
        <Route 
          path="/login"
          element={
            user ? <Navigate to='admin-dashboard' replace />:
            <Login handleLogin={handleLogin} />
          }
        />
        <Route 
          path='/login/admin-dashboard'
          element={
            <ProtectedView user={user}>
              <AdminDashBoard />
            </ProtectedView>
          }
        />

        <Route 
          path="/cam-dashboard"
          element={
            <ProtectedView user={user}>
              <CamFeedDashBoard />
            </ProtectedView>
          }
        />
        <Route 
          path="/notif-dashboard"
          element={
            <ProtectedView user={user} >
              <NotificationDashBoard />
            </ProtectedView>
          }
        />
        <Route 
        path='/'
        element={
          user ? <Navigate to='/admin-dashboard' replace /> :
          <Navigate to="/login" replace />
        }
         />
         <Route 
          path='*'
          element={
            <div>
              Page Not Found
            </div>
          }
         />

      </Routes>
    </div>
    
    
  )
}

export default App

