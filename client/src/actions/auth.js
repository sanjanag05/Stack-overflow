import * as api from '../api/index.js'
import { setCurrentUser } from './currentUser.js'


export const signup = (authData, navigate) => async (dispatch)=>{
    try {
        const {data}=await api.signUp(authData)
        dispatch({type:"AUTH",data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
        
    } catch (e) {

        
    }
}

export const login = (authData, navigate) => async (dispatch)=>{
    try {
        const {data}=await api.logIn(authData)
        dispatch({type:"AUTH",data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
        
    } catch (e) {
    
        
    }
}
