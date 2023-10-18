import React, { useState } from 'react'
import {useCookies} from 'react-cookie'

export default function Auth() {
  const [cookies,setCookie,removeCookie]=useCookies(null)
  const[isLogIn,setIsLogin]=useState(true )
  const[email,setEmail]=useState(null)
  const[password,setPassword]=useState(null)
  const[confirmPassword,setConfirmPassword]=useState(null)
  const [error,setError]=useState(null)
  console.log(cookies);
  
  const viweLogin=(status)=>{
        setError(null)
        setIsLogin(status)
  }
  const handleSubmit=async(e,endpoint)=>{
       e.preventDefault()
       if(!isLogIn && password!==confirmPassword){
        setError('MAke Sure password MAtch!')
        return
       }  
       const response=await fetch(`${process.env.REACT_APP_SERVERURL}/
       ${endpoint}`,{
         method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({email,password})
        })
       const data=await response.json()
       if(data.detail){
        setError(data.detail)
       }
       else{
        setCookie('Email',data.email)
        setCookie('AuthToken',data.token) 
        window.location.reload()
       }
  }
  return (
    <div className='auth-container  '>
      <div className='auth-container-box'>
        <form>
          <h2> {  isLogIn ? 'Please Log In' : 'Please Sign Up'}</h2>
          <input 
          type='email'
          placeholder='email'
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input
           type='password'
          placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}
          />
          {!isLogIn && <input
          type='password'
          placeholder='confirm password'
          onChange={(e)=>setConfirmPassword(e.target.value)}
          />}
          <input type='submit' className='create' onClick={(e)=>handleSubmit(e,isLogIn ? 'login':'signup')}/>
          {error && <p>{error}</p>}
        </form> 
        <div className='auth-options'>
          <button 
          onClick={()=>{viweLogin(false)}}
          style={{backgroundColor: !isLogIn ? 'rgb(255,255,255)':'rgb(188,188,188)'}}
          >Sign Up</button>
          <button
           onClick={()=>viweLogin(true)}
           style={{backgroundColor: isLogIn ? 'rgb(255,255,255)':'rgb(188,188,188)'}}
           >Login</button>
        </div>
      </div>
      
    </div>
  )
}
