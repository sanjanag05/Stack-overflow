import React from 'react'
import '../../App.css'
import Leftbar from '../../component/Leftbar/Leftbar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Homebar from '../../component/Homebar/Homebar'

const Questions = () => {
  return (
        <div className='home-container-1'>
          <Leftbar />
          <div className='home-container-2' >
      
          <Homebar />
          <Rightbar/>
            </div>
        </div>

  )
}

export default Questions