export interface IProvidersProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IValuesRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IValuesLoginForm {
  email: string;
  password: string;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface IProduct {
  prop: IProducts;
}

export interface ISearchForm {
  search: string;
}

export interface IUserContext {
  user: IUser | null;
  userRegister: (formData: IValuesRegisterForm) => Promise<void>;
  userLogin: (formData: IValuesLoginForm) => Promise<void>;
  userLogout: () => void;
}

export interface ICartContext {
  products: IProducts[];
  cartProducts: IProducts[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (id: number) => void;
  RemoveToCart: (id: number) => void;
  valueToCart: number;
  getProduct: IProducts[];
  setSeachProduct: React.Dispatch<React.SetStateAction<string>>;
  loadProducts: () => Promise<void>;
}
