import React,{useContext} from 'react'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { CartDropdownContext } from '../../context/cartdropdown.context'


const CartIcon = () => {
  const {isCartDropdownOpen, setCartDropdownOpen} = useContext(CartDropdownContext)

  const handleDropdown = () => setCartDropdownOpen(!isCartDropdownOpen)
  

  return (
    <div className='cart-icon-container' onClick={handleDropdown}>
        <ShoppingCartIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon