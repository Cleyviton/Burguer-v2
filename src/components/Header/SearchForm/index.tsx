import { MdSearch } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ISearchForm } from '../../../contexts/@types';
import { CartContext } from '../../../contexts/CartContext';

const SearchForm = () => {
  const { register, handleSubmit, reset } = useForm<ISearchForm>();
  const { setSeachProduct } = useContext(CartContext);

  const handleSeach = (data: ISearchForm) => {
    setSeachProduct(data.search);
    reset();
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(handleSeach)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        {...register('search')}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
