import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  IProvidersProps,
  IUser,
  IUserContext,
  IValuesLoginForm,
  IValuesRegisterForm,
} from './@types';
import { Api } from '../services/Api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProvidersProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@Burguer-kenzie:TOKEN');

    if (token) {
      navigate('/shop');
    } else {
      navigate('/');
    }
  }, []);

  const userRegister = async (formData: IValuesRegisterForm) => {
    try {
      const response = await Api.post('/users', formData);
      toast.success('Registro realizado com sucesso!', {
        autoClose: 1000,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(
        'E-mail já existente, tente cadastrar com um E-mail diferente!',
        {
          autoClose: 1000,
        }
      );
    }
  };

  const userLogin = async (formData: IValuesLoginForm) => {
    try {
      const response = await Api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@Burguer-kenzie:TOKEN', response.data.accessToken);
      toast.success('Login realizado com sucesso!', {
        autoClose: 1000,
      });
      navigate('/shop');
    } catch (error) {
      console.log(error);
      toast.error('E-mail ou senha incorreto!', {
        autoClose: 1000,
      });
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@Burguer-kenzie:TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
