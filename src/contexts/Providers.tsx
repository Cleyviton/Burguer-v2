import { UserProvider } from './UserContext';
import { IProvidersProps } from './@types';
import { CartProvider } from './CartContext';

const Providers = ({ children }: IProvidersProps) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);

export default Providers;
