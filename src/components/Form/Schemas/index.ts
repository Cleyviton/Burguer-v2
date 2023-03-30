import * as yup from 'yup';

export const formSchemaRegister = yup.object().shape({
  name: yup.string().required('É obrigatório digitar um nome.'),

  email: yup
    .string()
    .required('É obrigatório digitar um E-mail.')
    .email('E-mail inválido'),

  password: yup
    .string()
    .required('É obrigatório digitar uma senha.')
    .matches(/.{6,}/, 'A senha deve conter no mínimo 6 caracteres'),

  confirmPassword: yup
    .string()
    .required('É obrigatório confirmar sua senha.')
    .oneOf([yup.ref('password')], 'As senhas não correspondem.'),
});

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required('É obrigatório digitar um E-mail.')
    .email('E-mail inválido'),

  password: yup.string().required('É obrigatório digitar uma senha.'),
});
