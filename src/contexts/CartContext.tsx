import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ICartContext, IProducts, IProvidersProps } from './@types';
import { Api } from '../services/Api';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IProvidersProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [cartProducts, setCartProducts] = useState<IProducts[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [valueToCart, setValueToCart] = useState<number>(0);
  const [searchProduct, setSeachProduct] = useState<string>('');

  const getProduct = products.filter((product) =>
    searchProduct === ''
      ? true
      : product.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
        product.category.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const loadProducts = async () => {
    const token = localStorage.getItem('@Burguer-kenzie:TOKEN');
    if (token) {
      try {
        const response = await Api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const addCartValue = () => {
      const totalValue = cartProducts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      setValueToCart(totalValue);
    };
    addCartValue();
  }, [cartProducts]);

  const addToCart = (id: number) => {
    const filterProduct = products.filter((product) => product.id === id);

    const productExistent = cartProducts.find((prod) => prod.id === id);
    if (productExistent) {
      toast.error(
        'Produto já encontrado no carrinho, Finalize a compra ou remova-o antes de adiciona-lo novamente!',
        {
          autoClose: 900,
        }
      );
      return;
    }

    setCartProducts([...cartProducts, ...filterProduct]);
    toast.success('Produto adicionado ao Carrinho com Sucesso!', {
      autoClose: 900,
    });
  };

  const RemoveToCart = (id: number) => {
    const filterProduct = cartProducts.filter((product) => product.id !== id);

    setCartProducts(filterProduct);
    toast.success('Produto Removido do Carrinho com Sucesso!', {
      autoClose: 900,
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartProducts,
        setCartProducts,
        isOpenModal,
        setIsOpenModal,
        addToCart,
        RemoveToCart,
        valueToCart,
        getProduct,
        setSeachProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
