import { ButtonHTMLAttributes } from 'react';
import * as buttonStyles from './styles.module.scss';

type Props = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/* eslint-disable react/jsx-props-no-spreading */
export const Button = ({ text, ...rest }: Props): JSX.Element => (
  <button {...rest} type="button" className={buttonStyles.button}>
    {text}
  </button>
);

export default Button;
