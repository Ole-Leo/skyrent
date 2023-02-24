import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow-back.svg';

import styles from './styles.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navLink}>
        <Arrow />
      </Link>
      <Logo />
    </nav>
  );
};
