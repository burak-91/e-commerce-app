import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../Form-Input/FormInput'
import Button from '../Button/Button'
import { signInWithGooglePopup, createUserDocument, signInUserWithEmailAndPassword } from '../../firebase/firebase'
import './signin.style.scss'

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
    const { user } = await signInWithGooglePopup()
    await createUserDocument(user)
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = user
    try {
       await signInUserWithEmailAndPassword(email, password);
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
    <div className='sign-up-container'>
      <h2>Already have an account</h2>
      <span>Sign In with Email,Password or Google</span>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={user.email} label="Email" required onChange={handleChange} />
        <FormInput type="password" name="password" value={user.password} label="Password" required onChange={handleChange} />
        <div className="buttons-container">
          <Button type='submit' content='Sign In' />
          <Button type='button' content='Google Sign In' buttonType='google-sign-in' onClick={logGoogleUser} />
        </div>
      </form>


    </div>
  )
}

export default SignIn