import React, {useState} from 'react'
import { useParams ,Link, useNavigate, useLocation} from 'react-router-dom'
import moment from 'moment'
import { useSelector , useDispatch} from 'react-redux'
import copy from 'copy-to-clipboard'

import up from '../../assests/up.svg'
import down from '../../assests/down.svg'
import Avatar from '../../component/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer , deleteQuestion,voteQuestion } from '../../actions/question'
import './Question.css'





const QuestionDetails = () => {

    const {id}= useParams()
    const questionsList = useSelector(state => state.questionReducer)
    console.log(questionsList)



    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector(state => state.currentUserReducer)
    const location = useLocation()
    const url ='http://localhost:3000'
   
    
    const handelPostAns=(e,answerlength) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or SignUp to answer a question')
            Navigate('/Auth')

        }else{
            if(Answer === ''){
                alert('Enter an answer before sumitting')
            }else{
                dispatch(postAnswer({ id, noOfAnswers: answerlength + 1, answerBody: Answer, userAnswered: User.result.name, userId:User.result._id}))
            }
        }

    }

    const handleShare=() =>{
        copy(url+location.pathname)
        alert ('Copied Url:' +url+location.pathname)
    }

    const handleDelete =()=>{
        dispatch(deleteQuestion(id, Navigate))
    }

    const handleUpVote =()=>{
        dispatch(voteQuestion,(id,'upVote',  User.result._id))
    }
    const handleDownVote =()=>{
        dispatch(voteQuestion,(id,'downVote',  User.result._id))
    }
 

  return (

       <div className="question-detail-page">
        {
            questionsList.data === null ? 
            <h1> loading..</h1>:

            questionsList.data.filter(question => question._id === id).map(question=>(
                <div key={question._id}>
                    <section className="question-detail-container">
                        <h1>{question.questionTitle}</h1>
                        <div className="question-detail-container-2">
                            <div>
                            <img src={up} alt='up' width='22' onClick={handleUpVote}/>
                                <p>{question.upVote.length - question.downVote.length}</p>
                            <img src={down} alt='down' width='22' onClick={handleDownVote}/>
                            </div>

                            <div style={{width: '100%'}}>
                                <p className="question-body">{question.questionBody}</p>
                                <div className="question-detail-tag">
                                    {
                                        question.questionTags.map((index,tag)=>(
                                            <p key={index}>{tag} </p>
                                        ))
                                    }
                                </div>

                                <div className="question-action-user">
                                    <div>
                                        <button type='button' onClick={handleShare}>Share</button>
                                        {
                                            User?.result._id === question?.userId &&(

                                                <button type='button' onClick={handleDelete}>Delete</button>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <p>
                                            asked {moment(question.postedOn).fromNow()}
                                        </p>

                                        <Link to={`/Users/${question.userId}` }className='user-link' style={{ color:'#0086d8'}}>
                                            <Avatar backgroundColor='orange' px='8px' py='5px'>
                                                {question.userPosted.charAt(0).toUpperCase() }
                                            </Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {
                        question !== 0 &&(
                            <section>
                           
                                <h1>{question.noOfAnswers} answers</h1>
                                <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                            </section>

                        )
                    }

                    <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form onSubmit={(e)=>{handelPostAns(e, question.answer.length)}}>
                        <textarea id='' name='' rows='20' cols='60' onChange={e=> setAnswer(e.target.value)}></textarea>
                        <input type='submit'className='post-ans-btn' value='Post Your Answer' ></input>
                        </form>

                        <p>
                            Browser Other question tagged <span />
                            {
                                question.questionTags.map((index,tag)=>(
                                    <Link to='/Tags' key={index} className='ans-tags'>{tag}</Link>
                                ))
                            } or <span />

                            <Link to='/AskQuestion' style={{textDecoration:'none', color:'#009dff'}}>ask your own question</Link>
                        </p>
                    </section>



                   
                </div>

            ))

        }
       </div>

  )
}
 
export default QuestionDetails