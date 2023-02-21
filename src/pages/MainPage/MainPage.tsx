import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardData } from '../../models/mockData';
import { Logo } from '../../components/Logo/Logo';
import { Title } from '../../components/Title/Title';
import { Cards } from '../../components/Cards/Cards';
import { Button } from '../../components/Button/Button';
import { Select } from '../../components/Select/Select';

import styles from './styles.module.css';

export const MainPage = () => {
  const [isSelectShown, setIsSelectShown] = useState(false);

  const clickHandler = () => {
    setIsSelectShown(!isSelectShown);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <Link className={styles.link} to="/about">
          О проекте
        </Link>
      </nav>

      <div className={styles.titles}>
        <Title titleType="primary">Пора переезжать?</Title>
        <Title titleType="secondary" opacity="0.5">
          Находите места для жизни и работы по всему миру
        </Title>
      </div>

      {isSelectShown && <Select />}
      {!isSelectShown && (
        <Button onClick={clickHandler}>Подобрать недвижимость</Button>
      )}

      <Cards data={CardData} />
    </>
  );
};
