import React from 'react'
import './category.style.scss'

const Category = ({category}) => {
  const {title, imageUrl} = category
  return (
    <div className='category-container'>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'/>
      <div className='category-body-container'>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default Category