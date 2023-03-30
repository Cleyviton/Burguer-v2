import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { IProduct } from '../../../../contexts/@types';
import { CartContext } from '../../../../contexts/CartContext';

const CartProductCard = ({ prop }: IProduct) => {
  const { RemoveToCart } = useContext(CartContext);
  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={prop.img} alt={prop.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {prop.name}
        </StyledTitle>
        <button type='button' aria-label='Remover'>
          <MdDelete size={24} onClick={() => RemoveToCart(prop.id)} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
