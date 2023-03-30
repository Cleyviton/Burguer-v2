import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { IProduct } from '../../../contexts/@types';
import { CartContext } from '../../../contexts/CartContext';

const ProductCard = ({ prop }: IProduct) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={prop.img} alt={prop.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {prop.name}
        </StyledTitle>
        <StyledParagraph className='category'>{prop.category}</StyledParagraph>
        <StyledParagraph className='price'>
          R$ {prop.price.toFixed(2).replaceAll('.', ',')}
        </StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => addToCart(prop.id)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
