import React,{useContext} from 'react'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import {CartIconContainer,Span} from './cart-icon.style.js'
import { CartContext } from '../../context/cart.context'


const CartIcon = () => {
  const {isCartDropdownOpen, setCartDropdownOpen, cartItems, totalQuantity} = useContext(CartContext)

  const handleDropdown = () => setCartDropdownOpen(!isCartDropdownOpen)
  
  return (
    <CartIconContainer  onClick={handleDropdown}>
        <ShoppingCartIcon style={{ 'width': '24px', 'height': '24px'}} />
        {
        cartItems.length > 0 
        ? <Span>{totalQuantity}</Span> 
        : <Span>0</Span>
        }
    </CartIconContainer>
  )
}

export default CartIcon