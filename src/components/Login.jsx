import React, { useState } from 'react'
import './Login.css'
import { assets } from '../assets/assets'


const Login = ({setshowLogin}) => {

    const [currentstate,setcurrentstate] = useState("Sign up")
  return (
    <div className='login'>
       <form className='cont'>
        <div className="logintitle">
            <h2>{currentstate}</h2>
            <img onClick={()=>setshowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currentstate==="login"?<></>:
          <input type="text" placeholder='Your name'name="" id="" required/>}
          <input type="email" placeholder='Your email'name="" id="" required />
          <input type="password" placeholder='password' name="" id="" required/>
        </div>
        <button>{currentstate==='Sign up'?"create account":"login"}</button>
        <div className="login-pop">
          <input type="checkbox" name="" id="" required/>
          <p>By continuing I agree to terms and policy</p>
        </div>
        {currentstate==="login"?<p>Create new account?<span onClick={()=>setcurrentstate('Sign up')}>Click here</span></p>:<p>Already have account?<span onClick={()=>setcurrentstate('login')}>login here</span></p>}
        
        
       </form>
    </div>
  )
}

export default Login