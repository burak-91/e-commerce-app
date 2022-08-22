import React,{useContext} from 'react'
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkOutPage.style.js'
import Navbar from '../../components/Navbar/Navbar'
import Checkout from '../../components/Checkout/Checkout'
import {CartContext} from '../../context/cart.context'

const CheckOutPage = () => {

    const {cartItems,totalPrice} = useContext(CartContext)

  return (
    <>
        <Navbar />
        <CheckoutContainer className="checkout-container">
            <CheckoutHeader className='checkout-header'>
                <HeaderBlock className='header-block'>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock className='header-block'>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock className='header-block'>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock className='header-block'>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock className='header-block'>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <div className='header-block'/>
            {cartItems.map(product => (
                <Checkout key={product.id} product={product} />
            ))}
            <Total>Total: ${totalPrice}</Total>
        </CheckoutContainer>
        
    </>
  )
}

export default CheckOutPage