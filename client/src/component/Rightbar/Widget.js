import React from 'react'
import './Rightbar.css'
import comment from '../../assests/comment.svg'
import pen from '../../assests/pen.svg'

const Widget = () => {
  return (
    <div className="widget">

        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
            <img src={pen} alt='pen' width='18'/>
            <p>Why the number input is the worst input</p>
        </div>
        <div className="right-sidebar-div-2">
            <img src={pen} alt='pen' width='18'/>
            <p>Why the number input is the worst iPicture perfect images with the modern element input</p>
        </div>
     </div>
        <h4>Featured</h4>
        <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
            <img src={comment} alt='pen' width='18'/>
            <p>Temporary policy: ChatGPT is banned</p>
        </div>
        <div className="right-sidebar-div-2">
            <img src={comment} alt='pen' width='18'/>
            <p>I'm standing down as a moderator</p>
        </div>

        <div className="right-sidebar-div-2">
            <img src={comment} alt='pen' width='18'/>
            <p>2022 Community Moderator Election Results<br />  now with two more mods!</p>
        </div>
      
    </div>
    </div>
 

  )
}

export default Widget