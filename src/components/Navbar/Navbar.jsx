import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import './navbar.style.scss'
import { UserContext } from '../../context/user.context'
import {signOutUser} from '../../firebase/firebase'


const Navbar = () => {
  const {currentUser,setCurrentUser} = useContext(UserContext)

  const handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
 

  return (
    <>
        <div className='navigation'>
            <Link to='/' className='logo-container'><Logo className='logo'/></Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/contact'>CONTACT</Link>
                {currentUser 
                ? <span className='nav-link'onClick={handleSignOut} >SIGN OUT</span> 
                : <Link className='nav-link' to='/auth'>SIGN IN</Link>}
            </div>
        </div>
    </>
  )
}

export default Navbar