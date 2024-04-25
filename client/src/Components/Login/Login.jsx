import React from 'react';
import './Login.css'
import covering from '../Assets/loginimg.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";


const Login = () => {
    return (
        <div className='Login'>
          <div className='container d-flex head'>
            <div className='coverimg row'>
              <img src={covering} alt="" className='image col-md-6' />
              <div className="textdiv">
                <h2 className='tittle'>"Start a Conversation, Find Your Balance</h2>
                <p>Start a conversation today and take the first step towards a healthier mind."</p>
              </div>
              <div className="footerdiv text-center col-md-10">
                <span className='text'>Don't have a account?</span>
<Link to={'./register'}>
<button className='btn'>Sign Up</button>
</Link>
              </div>
            </div>

              <div className="form col-md-6 d-flex flex-column align-items-center justify-content-center ">
                <div className="headerdiv text-center" >
                    <img src={logo} alt="logo" />
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
    <MdEmail />
 <input type="Password" id='Password' placeholder='Enter Password' />
    </div>
       </div>
       <Link to={'/chatbot'} className='text-center'> <button className='primary_btn'>
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
