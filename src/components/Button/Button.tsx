import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  type?: 'normal' | 'outlined';
  onClick?: VoidFunction;
};

export const Button = ({ type = 'normal', children, onClick }: Props) => {
  const btnStyle = cn(styles.button, styles[type]);
  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};
