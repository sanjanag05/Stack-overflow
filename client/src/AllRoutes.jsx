import React from 'react'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import {Routes, Route} from 'react-router-dom'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import Profile from './pages/Profile/Profile'

const AllRoutes = () => {
  return (
  
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/Auth" element={<Auth />}/>
      <Route exact path="/Questions" element={<Questions />}/>
      <Route exact path="/AskQuestion" element={<AskQuestion />}/>
      <Route exact path="/Questions/:id" element={<DisplayQuestion />}/>
      <Route exact path="/Tags/" element={<Tags />}/>
      <Route exact path="/Users/" element={<Users />}/>
      <Route exact path="/Users/:id" element={<Profile />}/>

    </Routes>
  
  )
}

export default AllRoutes