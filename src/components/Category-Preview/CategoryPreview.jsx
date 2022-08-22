import React from 'react'
import './categoryPreview.style.scss'
import Shop from '../Shop/Shop'
import { Link } from 'react-router-dom'

const CategoryPreview = ({title,products}) => {
  return (
    <div className='category-preview-container'>
        <h2>
            <Link className='title' to={title}>{title.toUpperCase()}</Link>
        </h2>
        <div className='preview'>
            {products
            .filter((_,index) => index < 4)
            .map(product => (
                <Shop key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default CategoryPreview