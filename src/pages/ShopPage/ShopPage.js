import React,{useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Shop from '../../components/Shop/Shop'
import './shopPage.style.scss'
import {ProductContext} from '../../context/product.context'

const ShopPage = () => {
    const {products} = useContext(ProductContext)
  return (
    <div>
        <Navbar />
        <div className='products-container'>
        {products.map((product) =>{
          return  <Shop key={product.id} {...product}/>
       })}
        </div> 
    </div>
  )
}

export default ShopPage