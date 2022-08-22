import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Shop from '../../components/Shop/Shop';

import { CategoriesContext } from '../../context/categories.context';

import {CategoryContainer, Title} from './category.style.js';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <Shop key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;