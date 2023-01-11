import React from 'react'


import Leftbar from '../../component/Leftbar/Leftbar'
import Rightbar from '../../component/Rightbar/Rightbar'
import QuestionDetails from './QuestionDetails'
import '../../component/Homebar/Homebar.css'



const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
          <Leftbar />
          <div className='home-container-2' >
          <QuestionDetails />
          <Rightbar />
          </div>
        </div>
  )
}

export default DisplayQuestion