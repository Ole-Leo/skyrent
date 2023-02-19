import { CardData } from '../../models/mockData';
import { Button } from '../Button/Button';
import { Cards } from '../Cards/Cards';
import { Logo } from '../Logo/Logo';
import { Title } from '../Title/Title';

import styles from './styles.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Logo />
        <a className={styles.link} href="/">
          О проекте
        </a>
      </nav>

      <div className={styles.titles}>
        <Title titleType="primary">Пора переезжать?</Title>
        <Title titleType="secondary" opacity="0.5">
          Находите места для жизни и работы по всему миру
        </Title>
      </div>
      <Button>Подобрать недвижимость</Button>

      <Cards data={CardData} />
    </div>
  );
};
