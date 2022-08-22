import React from 'react'
import {DirectoryItemContainer, Body, BackgroundImage} from './directoryItem.style.js'

const DirectoryItem = ({category}) => {
  const {title, imageUrl} = category
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem