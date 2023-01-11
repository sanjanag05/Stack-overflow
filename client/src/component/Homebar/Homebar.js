import React from 'react'
import {Link ,useLocation} from 'react-router-dom'
import './Homebar.css'
import {useSelector} from 'react-redux'
import QuestionList  from './QuestionList'
import { useNavigate } from 'react-router-dom'


const Homebar = () => {

  const location = useLocation()
  
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionReducer)
  // console.log(questionsList)



 

  const redirect =()=>{
    alert("Login or Signup to ask question")
    navigate('/Auth')

  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Question
          
          </h1> :<h1> All Questions</h1>
        }
           <Link to={user === null ? redirect():`/AskQuestion`} className='ask-btn'>Ask Question</Link>
      </div>
      <div>
        {
          questionsList.data === null ? 
          <h1>Loading..</h1>:
          <>
          <p>{questionsList.length} questions</p>
          
          <QuestionList questionsList={questionsList.data} />
          </>
         

        }
      </div>
       </div>
  )
}

export default Homebar