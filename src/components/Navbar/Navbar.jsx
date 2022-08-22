import React,{useContext} from 'react'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import {Navigation, LogoContainer, NavLinksContainer, NavLink} from './navbar.style.js'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { signOutUser } from '../../firebase/firebase'
import CartIcon from '../Cart-Icon/CartIcon'
import CartDropdown from '../Cart-Dropdown/CartDropdown'

const Navbar = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartDropdownOpen} = useContext(CartContext)

  const handleSignOut = async () => {
    await signOutUser()
  }


  return (
    <>
        <Navigation>
            <LogoContainer to='/'><Logo/></LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>SHOP</NavLink>
                <NavLink to='/contact'>CONTACT</NavLink>
                {currentUser 
                ? <NavLink as='span' onClick={handleSignOut} >SIGN OUT</NavLink> 
                : <NavLink to='/auth'>SIGN IN</NavLink>}
                <CartIcon/>
            </NavLinksContainer>
            {isCartDropdownOpen && <CartDropdown/>}
        </Navigation>
    </>
  )
}

export default Navbar