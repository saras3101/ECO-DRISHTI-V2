import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CamFeedDashBoard from './DashBoards/CamFeedDashBoard'
import AdminDashBoard from './DashBoards/AdminDashBoard'
import NotificationDashBoard from './DashBoards/NotificationDashBoard'


const pathname = window.location.pathname;

let RenderComponent = <App />;

if(pathname === '/cam-dashboard'){
  RenderComponent = <CamFeedDashBoard />

}
if(pathname === '/admin-dashboard'){
  RenderComponent = <AdminDashBoard />
}
if(pathname === '/notif-dashboard'){
  RenderComponent = <NotificationDashBoard />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {RenderComponent}
  </StrictMode>,
)
