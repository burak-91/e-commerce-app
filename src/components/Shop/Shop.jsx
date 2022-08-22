import React,{useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import {ProductCartContainer, Footer, Name, Price} from './shop.style.js'
import Button from '../Button/Button'
const Shop = (product) => {
    const {addItemToCart} = useContext(CartContext)
    const {imageUrl,name,price} = product.product

    const handleClick = () => {
      addItemToCart(product.product)
    }

  return (
    <ProductCartContainer>
     <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button content='Add to Cart' onClick={handleClick} type='button' inverted/>
    </ProductCartContainer>
  )
}

export default Shop