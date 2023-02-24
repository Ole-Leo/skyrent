import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  onClick?: VoidFunction;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
