import {useState,useContext} from 'react'
import './signup.style.scss'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'
import { createAuthUserWithEmailAndPassword ,createUserDocument } from '../../firebase/firebase'
import {UserContext} from '../../context/user.context'

const defaultUser = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
    const {setCurrentUser} = useContext(UserContext)
    const [user, setUser] = useState(defaultUser)
    
    const resetFormFields = () => { setUser(defaultUser) }

  const handleChange = (e) => {
   setUser((prevState) => ({...prevState,[e.target.name]: e.target.value }))
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(user.password !== user.confirmPassword) return alert('Passwords do not match')
    const { email, password} = user
    
    try {
      const { user }= await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocument(user, {displayName: user.displayName})
      setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Email already in use')
      }else{
        console.log(error)
      }
    }
  }

 


  return (
    <div className='sign-up-container'>
      <h2 className='title'>Do not have an account</h2>
      <span>Sign Up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput label='username' value={user.displayName} type='text' name='displayName' onChange={handleChange}  required />
        <FormInput label='email' value={user.email} type='text' name='email' onChange={handleChange} required />
        <FormInput label='password' value={user.password} type='password' name='password' onChange={handleChange} required/>
        <FormInput label='confirm password' value={user.confirmPassword} type='password' name='confirmPassword' onChange={handleChange} required/>
        <Button content='Sign Up' type='submit'/>
      </form>
    </div>
  )
}

export default SignUp