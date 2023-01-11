import React , {useState} from 'react'
import './AskQuestion.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {askQuestion} from '../../actions/question'


const AskQuestion = () => {

  const [questionTitle,setQuestionTitle] = useState('')
  const [questionBody,setQuestionBody] = useState('')
  const [questionTags,setQuestionTags] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state)=> state.currentUserReducer)

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log({questionTitle,questionBody,questionTags})
    dispatch(askQuestion({questionBody, questionTitle, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
  }

  const handleEnter=(e)=>{
    if(e.key==="Enter"){
       setQuestionBody(questionBody+"\n")
    }
 }

  return (
    <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">

            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p> Be specific and right the question</p>
              <input type='text'  id='ask-ques-body' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='for.eg -if there is a R function'></input>
            </label>

            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p> Include all the information</p>
              <textarea name='question' id='ask-ques-body' onChange={(e)=>{setQuestionBody(e.target.value)}} cols='60' rows='10' onKeyDown={handleEnter}></textarea>
             
            </label>

            <label htmlFor='ask-ques-tag'>
              <h4>Tags</h4>
              <p> Add up to five question to specify the question</p>
              <input type='text'  id='ask-ques-body' onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='for.eg -xml typescript wordexpress'></input>
            </label>

          </div>
          <input type='submit' value='Review your question' className='review-btn'></input>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion





