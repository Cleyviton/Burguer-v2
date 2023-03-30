import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IValuesLoginForm } from '../../../contexts/@types';
import { UserContext } from '../../../contexts/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { formSchemaLogin } from '../Schemas';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValuesLoginForm>({
    resolver: yupResolver(formSchemaLogin),
  });
  const { userLogin } = useContext(UserContext);

  return (
    <StyledForm onSubmit={handleSubmit((data) => userLogin(data))}>
      <Input
        label='Digite o seu E-mail'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Digite sua senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
