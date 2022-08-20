import React,{useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import './shop.style.scss'
import Button from '../Button/Button'
const Shop = (product) => {

    const {addItemToCart} = useContext(CartContext)
    const handleClick = () => {
      addItemToCart(product)
    }

  return (
    <div className='product-card-container'>
     <img src={product.imageUrl} alt={`${product.name}`} />
      <div className='footer'>
        <span className='name'>{product.name}</span>
        <span className='price'>{product.price}</span>
      </div>
      <Button content='Add to Cart' onClick={handleClick} type='button' buttonType='inverted'/>
    </div>
  )
}

export default Shop