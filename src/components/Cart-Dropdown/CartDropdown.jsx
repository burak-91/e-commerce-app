import React from 'react'
import './cartdropdown.style.scss'
import Button from '../Button/Button.jsx'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'/>
      <Button content='GO TO CHECKOUT'/>
    </div>
  )
}

export default CartDropdown