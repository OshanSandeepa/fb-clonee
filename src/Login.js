import React from 'react'
import './Login.css';
import { Button } from '@mui/material';
function Login() {
        const SignIn = ()=>   {

            //sgnIn...

        }




  return (
    <div className='login'>
      
    <div className="login__logo">

        <img
        src='https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg'

        alt=''
        
        
        />
        

        <img
        src='https://e3.365dm.com/19/11/2048x1152/skynews-facebook-logo_4826956.jpg'

        alt=''
        
        
        />


        
     
    </div>

    <Button type='Submit' onClick={SignIn }>Sign In </Button>


    </div>
  )
}

export default Login
