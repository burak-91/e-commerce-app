import React from 'react'
import './button.style.scss'
const Button = ({content,buttonType,...otherProps}) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>{content}</button>
  )
}

export default Button