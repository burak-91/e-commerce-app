import React,{useContext} from 'react'
import {CheckoutItemContainer, ImageContainer, Img, Span, Arrow, RemoveButton} from  './checkout.style.js'
import {CartContext} from '../../context/cart.context'



const Checkout = (product) => {
    const {imageUrl, name, price, quantity} = product.product;
    const {removeItemFromCart, removeByChoosing, addItemToCart} = useContext(CartContext);

  const removeItemHandler = () => {
      removeItemFromCart(product.product);
  }
  const removeAllHandler = () => {
      removeByChoosing(product.product);
  }
  const addItemHandler = () => {
      addItemToCart(product.product);
  }
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt='product' />
      </ImageContainer>
      <Span name>{name}</Span>
      <Span quantity>
        <Arrow  onClick={removeItemHandler}>&#10094;</Arrow>
        <Span value>{quantity}</Span>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Span>
      <Span price>{price}</Span>
      <RemoveButton  onClick={removeAllHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default Checkout