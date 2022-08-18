import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import './authPage.style.scss'


const AuthPage = () => {
  return (
    <div className='auth-page'>
      <Navbar />
    <div className='authentication-container'>
        <SignIn />
        <SignUp />
    </div>
    </div>
  )
}

export default AuthPage