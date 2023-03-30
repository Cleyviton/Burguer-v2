import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaRegister } from '../Schemas';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IValuesRegisterForm } from '../../../contexts/@types';
import { UserContext } from '../../../contexts/UserContext';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValuesRegisterForm>({
    resolver: yupResolver(formSchemaRegister),
  });
  const { userRegister } = useContext(UserContext);

  return (
    <StyledForm onSubmit={handleSubmit((data) => userRegister(data))}>
      <Input
        label='Digite o seu nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Digite o seu E-mail'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Crie uma senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <Input
        label='Confirme sua senha'
        type='password'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
