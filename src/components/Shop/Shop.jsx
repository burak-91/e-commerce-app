import React from 'react'
import './shop.style.scss'
import Button from '../Button/Button'
const Shop = (product) => {
  return (
    <div className='product-card-container'>
     <img src={product.imageUrl} alt={`${product.name}`} />
      <div className='footer'>
        <span className='name'>{product.name}</span>
        <span className='price'>{product.price}</span>
      </div>
      <Button content='Add to Cart' type='button' buttonType='inverted'/>
    </div>
  )
}

export default Shop