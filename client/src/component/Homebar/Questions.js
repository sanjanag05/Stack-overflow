import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => 

{
  return (
    <div key={question._id} className="display-ans-container">
      <div className="display-votes-ans">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfanswers }</p>
        <p>answers</p>
      </div>

    
        
 
        <div className="diplay-question-details">
          <Link to={`/Questions/${question._id}` } className='question-title-link'>{question.questionTitle}</Link>
            
           <div className="display-tag-time">
           <div className="display-tag">
          {
            question.questionTags.map((tag)=>(
              <p key ={tag}>{tag} </p>
            ))
          }
          </div>

          <p className="display-time">
            asked  {moment(question.postedOn).fromNow()} {question.userPosted}
          </p>
        </div>
        </div>

       


       </div>
    
  )
}

export default Questions