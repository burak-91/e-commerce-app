import { Routes, Route } from 'react-router-dom';
import CategoryPreviewPage from '../CategoryPreviewPage/CategoryPreviewPage';
import Category from '../Category/Category';

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreviewPage />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;