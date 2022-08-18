import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import './navbar.style.scss'

const Navbar = () => {
  return (
    <>
        <div className='navigation'>
            <Link to='/' className='logo-container'><Logo className='logo'/></Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/contact'>CONTACT</Link>
                <Link className='nav-link' to='/auth'>SIGN IN</Link>
                {/* <Link className='nav-link' to='/shop'></Link> */}
            </div>
        </div>
    </>
  )
}

export default Navbar