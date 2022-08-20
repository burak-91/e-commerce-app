import React,{useContext} from 'react'
import './checkOutPage.style.scss'
import Navbar from '../../components/Navbar/Navbar'
import Checkout from '../../components/Checkout/Checkout'
import {CartContext} from '../../context/cart.context'

const CheckOutPage = () => {

    const {cartItems,totalPrice} = useContext(CartContext)

  return (
    <>
        <Navbar />
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            <div className='header-block'/>
            {cartItems.map(product => (
                <Checkout key={product.id} product={product} />
            ))}
            <span className='total'>Total: ${totalPrice}</span>
        </div>
        
    </>
  )
}

export default CheckOutPage