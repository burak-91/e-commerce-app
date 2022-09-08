import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoryPreviewPage from '../CategoryPreviewPage/CategoryPreviewPage';
import Category from '../Category/Category';
import {useDispatch} from 'react-redux'
import {fetchCategoriesAsync } from '../../store/category/categoryAction';



const ShopPage = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {    
   dispatch(fetchCategoriesAsync())
  },[])



  return (
    <Routes>
      <Route index element={<CategoryPreviewPage />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;