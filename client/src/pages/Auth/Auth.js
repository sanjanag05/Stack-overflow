import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import  icon from '../../assests/icon.png'
import AboutAuth from './AboutAuth'
import './Auth.css'
import {signup ,login} from '../../actions/auth'

const Auth = () => {
    const [isSignup, setIsSignup]= useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSwitch =()=>{
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email && !password){
            alert("Enter the email and password")
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({name,email,password},navigate))
        }else{
            dispatch(login({email, password},navigate))
        }
     
    }
  return (
    <section class='auth-section'>
        {isSignup && <AboutAuth/>}
        <div class = 'auth-container-2'>
            { !isSignup && <img src={icon} alt='stack overFlow' className='login-logo'/> }

           <form className='auth-form' onSubmit={handleSubmit}>
            {
                isSignup &&(
                    <label>
                        <h4 style={{marginBottom:'10px'}}>Display Name</h4>
                        <input type='text' id='name' name='name'onChange={(e) => { setName(e.target.value)}} />
                    </label>
                )
            }
            <label htmlFor='email'>
                <h4 style={{marginBottom:'10px'}}> Email</h4>
                <input type='email' name='email' id='email' onChange={(e) => { setEmail(e.target.value)}}/>
            </label>
            <label htmlFor='password'>
                <div style={{display: 'flex', justifyContent:'center'}}>
                <h4> Password</h4>
                { !isSignup && <p style={{ fontSize:"13px", color:'#007ac6' , marginLeft:'30px', marginTop:'20px' }}>Forgot Password?</p>}
                </div>
                <input type='password' name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
                {  isSignup && <p style={{color:"#666767", fontSize:"13px"}}>password must be a minimum of 8 characters<br/> and should contain at least one upper-and <br/>lower-case letter,
                     a number, and a symbol</p>}
            </label>

            {
                isSignup && (
                    <label htmlFor='check'>
                        <input type='checkbox'/>
                        <h4 style={{ fontSize:"13px"}}> Get unstuck — ask a question <br/>Unlock new privileges like voting and commenting <br/>Save your favorite tags, filters, and jobs <br/>Earn reputation and badges</h4>

                    </label>
                )
            }

            <button type='submit' className='auth-btn'>{ isSignup ? 'Sign Up ' : 'Log in'}</button>
            {
                isSignup && (
                    <p style={{color:"#666767", fontSize:"13px"}}> 
                    By clicking “Sign up”, you agree to our 
                    <span style={{color:"#007ac6"}}> terms of<br/> service</span>,
                    <span style={{color:"#007ac6"}}>privacy policy</span> and
                    <span style={{color:"#007ac6"}}> cookie policy</span>
                    </p>
                )
            }
           </form>
            
            <p>
                {isSignup ? 'already have an account?' :"Don't have an account? "}
                <button type='button' className='handle-switch-btn'  onClick={handleSwitch}>{ isSignup ? "login":" sign up"}</button>
                 
            </p>
        </div>
    </section>
    
  )
}

export default Auth