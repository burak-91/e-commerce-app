import React,{useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import './shop.style.scss'
import Button from '../Button/Button'
const Shop = (product) => {
    const {addItemToCart} = useContext(CartContext)
    const {imageUrl,name,price} = product.product

    const handleClick = () => {
      addItemToCart(product.product)
    }

  return (
    <div className='product-card-container'>
     <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button content='Add to Cart' onClick={handleClick} type='button' buttonType='inverted'/>
    </div>
  )
}

export default Shop