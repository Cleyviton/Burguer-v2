import { FieldError, UseFormRegisterReturn } from 'react-hook-form/dist/types';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IPropsInput {
  label: string;
  type: 'text' | 'password' | 'email';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, type, register, error }: IPropsInput) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {error && (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    )}
  </fieldset>
);

export default Input;
