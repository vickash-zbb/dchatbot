import React from 'react';
import backgroundimg from '../Assets/loginimg.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";

import { MdPrivacyTip } from "react-icons/md";


import '../Login/Login.css'
const Login = () => {
    return (
        <div className='container'>
            <div className='register row'>
                <div className='col-md-6 registerleft'>
                <img src={backgroundimg} alt="" className='coverimage'/>
                <div className='headtittle'>
                    <h3>"Start a Conversation, Find Your Balance</h3>
<p>Start a conversation today and take the first step towards a healthier mind."</p>
                
<div className='footerregister'>
    <span>Did you already have a account..</span>
    <Link to={'/register'}><button className='btn'>
        Sign In
        </button> </Link>
</div>
        </div>    </div>
            
            <div className="form col-md-6 d-flex flex-column align-items-center justify-content-center ">
                <div className="headerdiv text-center" >
                    <img src={logo} alt="logo" className='logo'/>
                    <h3>Welcome Back!</h3>
                </div>

<form action='' className='form col-md-8 d-flex flex-column'>
    <span className='text-center'>Login Status will go here</span>
    <div className="inputdiv">  
    <label htmlFor="Email Id">Email Id</label>
    <div className='input'>
    <MdEmail />
 <input type="text" id='email' placeholder='Enter Email Id' />
    </div>
       </div>
    
    <div className="inputdiv">  
    <label htmlFor="Password">Password</label>
    <div className='input'>
    <MdPrivacyTip />

 <input type="Password" id='Password' placeholder='Enter Password' />
    </div>
       </div>
       <Link to={'/chatbot'} className='text-center mt-3'> <button className='primary_btn'>
        Login
       </button>
       </Link>
      
</form> 

              </div>
            </div>
            
          
        </div>
    );
}

export default Login;
