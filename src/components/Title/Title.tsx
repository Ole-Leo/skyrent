import { ReactNode } from 'react';

import cn from 'classnames';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  titleType: 'primary' | 'secondary';
  opacity?: string;
};

export const Title = ({ children, opacity, titleType }: Props) => {
  const titleStyle = cn(styles.title, styles[titleType]);

  return (
    <h2 className={titleStyle} style={{ opacity: opacity }}>
      {children}
    </h2>
  );
};
