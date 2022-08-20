import React,{useContext} from 'react'
import  './checkout.style.scss'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='product' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={removeAllHandler}>&#10005;</div>
    </div>
  )
}

export default Checkout