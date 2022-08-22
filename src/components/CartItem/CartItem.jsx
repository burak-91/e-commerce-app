import React,{useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import {CartItemContainer, Imag, ItemDetails, Span} from './cartItem.style.js'


const CartItem = () => {
    const {cartItems} = useContext(CartContext)

  return (
    <>
        {cartItems.map(cartItem => (
            <CartItemContainer key={cartItem.id}>
                <Imag src={cartItem.imageUrl} alt={`${cartItem.name}`} />
                <ItemDetails>
                    <Span>{cartItem.name}</Span>
                    <Span>{cartItem.quantity} x ${cartItem.price}</Span>
                </ItemDetails>
            </CartItemContainer>
        ))}
    </>
  )
}

export default CartItem