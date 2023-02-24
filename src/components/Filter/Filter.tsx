import { useState } from 'react';
import { Button } from '../Button/Button';
import { ICard } from '../../models/types';
import { baseURL } from '../../utils.ts/constants';
import { useFetchHook } from '../../hooks/useFetchHook';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import styles from './styles.module.css';

type Props = {
  list: ICard[];
  setFilteredData: Function;
};

export const Filter = ({ list, setFilteredData }: Props) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectValue, setSelectValue] = useState('Страна и город');
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const searchParams = new URLSearchParams({
    city: selectValue.split(' → ')[1] || '',
    from: minPrice,
    to: maxPrice,
  });

  const { data, fetchData } = useFetchHook(`${baseURL}?${searchParams}`);

  const listPlaces = [
    ...new Set(list.map(place => `${place.country} → ${place.city}`).sort()),
  ];

  const clickHandler = (value: string) => {
    setSelectValue(value);
    setIsOptionsShown(false);
  };

  const clickSearchHandler = () => {
    fetchData();
    setFilteredData(data);
  };

  const clickCleanHandler = () => {
    setSelectValue('Страна и город');
    setMinPrice('');
    setMaxPrice('');
    setFilteredData(list);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <div
          className={styles.select}
          onClick={() => setIsOptionsShown(!isOptionsShown)}
        >
          {selectValue}
          <span>
            <Arrow />
          </span>
        </div>
        {isOptionsShown && (
          <ul className={styles.options}>
            {listPlaces &&
              listPlaces.map(place => (
                <li
                  key={place + Date.now()}
                  className={styles.option}
                  onClick={() => clickHandler(place)}
                >
                  {place}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Цена от"
          className={styles.input}
          value={minPrice}
          onChange={e => setMinPrice(e.target.value.replace(/\D/gi, ''))}
        />
        <input
          type="text"
          placeholder="Цена до"
          className={styles.input}
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value.replace(/\D/gi, ''))}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={clickSearchHandler}>Подобрать</Button>
        <Button type="outlined" onClick={clickCleanHandler}>
          Очистить фильтр
        </Button>
      </div>
    </div>
  );
};
