import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import './navbar.style.scss'
import { UserContext } from '../../context/user.context'
import { CartDropdownContext } from '../../context/cartdropdown.context'
import { signOutUser } from '../../firebase/firebase'
import CartIcon from '../Cart-Icon/CartIcon'
import CartDropdown from '../Cart-Dropdown/CartDropdown'

const Navbar = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartDropdownOpen} = useContext(CartDropdownContext)

  const handleSignOut = async () => {
    await signOutUser()
  }


  return (
    <>
        <div className='navigation'>
            <Link to='/' className='logo-container'><Logo className='logo'/></Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/contact'>CONTACT</Link>
                {currentUser 
                ? <span className='nav-link' onClick={handleSignOut} >SIGN OUT</span> 
                : <Link className='nav-link' to='/auth'>SIGN IN</Link>}
                <CartIcon/>
            </div>
            {isCartDropdownOpen && <CartDropdown/>}
        </div>
    </>
  )
}

export default Navbar