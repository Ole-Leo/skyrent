import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../models/types';
import { fetchData } from '../../utils.ts/utils';
import { baseURL } from '../../utils.ts/constants';
import { Logo } from '../../components/Logo/Logo';
import { Title } from '../../components/Title/Title';
import { Cards } from '../../components/Cards/Cards';
import { Button } from '../../components/Button/Button';
import { Filter } from '../../components/Filter/Filter';

import styles from './styles.module.css';

export const MainPage = () => {
  const [places, setPlaces] = useState<ICard[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<ICard[]>([]);
  const [isFilterShown, setIsFilterShown] = useState(false);

  useEffect(() => {
    fetchData(baseURL, setPlaces);
  }, []);

  useEffect(() => {
    filteredPlaces.length ? setPlaces(filteredPlaces) : setPlaces([]);
  }, [filteredPlaces]);

  const clickHandler = () => {
    setIsFilterShown(!isFilterShown);
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

      {isFilterShown && <Filter setFilteredData={setFilteredPlaces} />}
      {!isFilterShown && (
        <Button onClick={clickHandler}>Подобрать недвижимость</Button>
      )}

      {places.length > 0 ? (
        <Cards data={places} />
      ) : (
        <p className={styles.error}>По вашему запросу вариантов не найдено</p>
      )}
    </>
  );
};
