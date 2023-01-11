import React from 'react'
import './Leftbar.css' 
import {NavLink} from 'react-router-dom'

const Leftbar = () => {
  return (
    <div className="left-sidebar">
        <nav className="side-nav" >
            <NavLink to='/' className={({isActive})=>isActive?"side-nav-link active":"side-nav-link"}    >
                <p style={{marginRight:"20px"}}>Home</p>
            </NavLink>
            
            <div className="side-nav-div">
                <div><p>PUBLIC</p></div>

                <NavLink to='/Questions' className={({isActive})=>isActive?"side-nav-link active":"side-nav-link"}   style={{paddingLeft:'60px'}} >
                    <p >Questions</p>
                </NavLink>

                <NavLink to='/Tags' className={({isActive})=>isActive?"side-nav-link active":"side-nav-link"}    style={{paddingLeft:'60px'}}>
                    <p>Tags</p>
                </NavLink>

                <NavLink to='/Users' className={({isActive})=>isActive?"side-nav-link active":"side-nav-link"}  style={{paddingLeft:'60px'}}>
                    <p>Users</p>
                </NavLink>
            </div>

        </nav>
     
    </div>
  )
}

export default Leftbar