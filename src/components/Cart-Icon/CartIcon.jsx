import React,{useContext} from 'react'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { CartContext } from '../../context/cart.context'


const CartIcon = () => {
  const {isCartDropdownOpen, setCartDropdownOpen, cartItems, totalQuantity} = useContext(CartContext)

  const handleDropdown = () => setCartDropdownOpen(!isCartDropdownOpen)
  
  return (
    <div className='cart-icon-container' onClick={handleDropdown}>
        <ShoppingCartIcon className='shopping-icon' />
        {cartItems.length > 0 ? <span className='item-count'>{totalQuantity}</span> : <span className='item-count'>0</span>}
    </div>
  )
}

export default CartIcon