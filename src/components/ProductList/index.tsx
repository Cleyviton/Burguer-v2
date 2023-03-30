import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../contexts/CartContext';
import { IProducts } from '../../contexts/@types';

const ProductList = () => {
  const { getProduct } = useContext(CartContext);

  return (
    <StyledProductList>
      {getProduct.map((product: IProducts) => (
        <ProductCard key={product.id} prop={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
