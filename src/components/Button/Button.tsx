import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};
