import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CategoryPreview from '../../components/Category-Preview/CategoryPreview'
import './categorypreview.style.scss'
import { useSelector } from 'react-redux';
import {categorySelector} from '../../store/category/categorySelector'


const CategoryPreviewPage = () => {
    const categoriesMap = useSelector(categorySelector)

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