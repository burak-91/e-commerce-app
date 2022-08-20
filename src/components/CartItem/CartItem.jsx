import React,{useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import './cartItem.style.scss'


const CartItem = () => {
    const {cartItems} = useContext(CartContext)

  return (
    <>
        {cartItems.map(cartItem => (
            <div key={cartItem.id} className='cart-item-container'>
                <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
                <div className='item-details'>
                    <span className='name'>{cartItem.name}</span>
                    <span className='price'>{cartItem.quantity} x ${cartItem.price}</span>
                </div>
            </div>
        ))}
    </>
  )
}

export default CartItem