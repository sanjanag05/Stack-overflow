import React from 'react'
import { useLocation } from 'react-router-dom'
import UserList from './UserList'
import LeftSidebar from '../../component/Leftbar/Leftbar'
import './User.css'
const Users = () => {
  const location= useLocation()
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{marginTop: '30px'}}>
        <h1 style={{fontWeight: '400'}}>Users</h1>


        {
          location.pathname === '/Users' ?
          <UserList /> :
          <></>
        
        }
      </div>
    </div>
  )
}

export default Users