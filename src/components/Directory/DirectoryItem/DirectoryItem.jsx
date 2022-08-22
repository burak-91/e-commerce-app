import React from 'react'
import './directoryItem.style.scss'

const DirectoryItem = ({category}) => {
  const {title, imageUrl} = category
  return (
    <div className='directory-item-container'>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image'/>
      <div className='body'>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem