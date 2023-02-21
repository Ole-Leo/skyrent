import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
};
