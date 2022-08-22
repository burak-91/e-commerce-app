import React,{useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CategoryPreview from '../../components/Category-Preview/CategoryPreview'
import './categorypreview.style.scss'
import {CategoriesContext} from '../../context/categories.context'


const CategoryPreviewPage = () => {
    const {categoriesMap} = useContext(CategoriesContext)

  return (
    <>
     <Navbar />
    <div className='shop-container'>
    {Object.keys(categoriesMap).map((title) => {
       const products = categoriesMap[title]
       return <CategoryPreview key={title} title={title} products={products} />
    })}
  </div>
    </>
  )
}

export default CategoryPreviewPage