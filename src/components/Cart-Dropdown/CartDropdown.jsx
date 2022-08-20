import React,{useContext} from 'react'
import './cartdropdown.style.scss'
import Button from '../Button/Button.jsx'
import CartItem from '../CartItem/CartItem.jsx'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart.context'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

  return (
    <div className='cart-dropdown-container'>
     {cartItems.length>0 ?  <CartItem className='cart-items' />: <div className='empty-message'>Your cart is empty</div>}
     <Button onClick={goToCheckoutHandler} content='CHECKOUT'/>
    </div>
  )
}

export default CartDropdown