import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from '../../firebase/firebase'
import {SignInContainer, ButtonsContainer} from './signin.style.js'


const defaultUser = {
  email: '',
  password: ''
}


const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser)


  const resetFormFields = () => { setUser(defaultUser) }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const logGoogleUser = async () => {
   await signInWithGooglePopup() 
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = user
    try {
       const {user} =await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found')
      } else if(error.code === 'auth/wrong-password') {
        alert('Wrong password or email')
      }else {
        console.log(error)
      }
    }
  }


  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign In with Email,Password or Google</span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={user.email} label="Email" required onChange={handleChange} />
        <FormInput type="password" name="password" value={user.password} label="Password" required onChange={handleChange} />
        <ButtonsContainer>
          <Button type='submit' content='Sign In' />
          <Button type='button' content='Google Sign In' google onClick={logGoogleUser} />
        </ButtonsContainer>
      </form>


    </SignInContainer>
  )
}

export default SignIn