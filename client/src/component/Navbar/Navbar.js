import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'
import {useSelector ,useDispatch} from 'react-redux'
import logo from '../../assests/logo.svg'
import Avatar from '../Avatar/Avatar';
import './Navbar.css'
import { useEffect } from 'react'
import { setCurrentUser } from '../../actions/currentUser';
const Navbar = () => {

  const dispatch = useDispatch()
  var User = useSelector((state) =>(state.currentUserReducer))
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
    
  }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout()

      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])
  return (

    <nav className="main-nav">
      <div className="navbar">
        <Link to='/' className="navbar-item nav-btn">
          <img scr={logo} alt='logo' />
        </Link>
        <Link to='/' className="navbar-item nav-btn">About</Link>
        <Link to='/' className="navbar-item nav-btn">Products</Link>
        <Link to='/' className="navbar-item nav-btn">For Teams</Link>

        <form>
          <input type="text" className="" placeholder='Search..' />

        </form>

        {
          User === null ?
            <Link to='/Auth' className="navbar-item nav-links">Log in </Link> :
            <>
              <Link to ={`Users/${User.result?._id}`}><Avatar backgroundColor='#009dff' px="10px" py ="7px" borderRadius="50%" color="white" >S</Avatar></Link>
              <button className="navbar-item nav-links" onClick={handleLogout}>log out</button>
            </>
        }

      </div>

    </nav>
  )
}

export default Navbar