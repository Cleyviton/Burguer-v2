import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../contexts/CartContext';
import { IProducts } from '../../../contexts/@types';

const CartProductList = () => {
  const { cartProducts, valueToCart, setCartProducts } =
    useContext(CartContext);
  return (
    <StyledCartProductList>
      <ul>
        {cartProducts.map((product: IProducts) => (
          <CartProductCard key={product.id} prop={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {valueToCart.toFixed(2).replaceAll('.', ',')}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => setCartProducts([])}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
