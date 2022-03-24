import { ButtonHTMLAttributes } from 'react';
import * as buttonStyles from './styles.module.scss';

type Props = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, ...rest }: Props): JSX.Element => {
  return <button {...rest} className={buttonStyles.button}>{text}</button>;
};

export default Button;
