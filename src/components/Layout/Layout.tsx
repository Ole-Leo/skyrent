import { Logo } from '../Logo/Logo';
import { Outlet } from 'react-router-dom';
import { currentYear } from '../../utils.ts/constants';

import styles from './styles.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
      <footer>
        <Logo />
        <p className={styles.year}>{currentYear}</p>
      </footer>
    </div>
  );
};
