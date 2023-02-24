import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { ICard } from '../../models/types';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import styles from './styles.module.css';
import { baseURL } from '../../utils.ts/constants';
import { fetchData } from '../../utils.ts/utils';

type Props = {
  setFilteredData: Function;
};

export const Filter = ({ setFilteredData }: Props) => {
  const [list, setList] = useState<ICard[]>([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectValue, setSelectValue] = useState('Страна и город');
  const [isOptionsShown, setIsOptionsShown] = useState(false);

  useEffect(() => {
    fetchData(baseURL, setList);
  }, []);

  const places = [
    ...new Set(list.map(place => `${place.country} → ${place.city}`).sort()),
  ];

  const clickHandler = (value: string) => {
    setSelectValue(value);
    setIsOptionsShown(false);
  };

  const clickSearchHandler = () => {
    fetchData(
      `${baseURL}?${new URLSearchParams({
        city: selectValue.split(' → ')[1] || '',
        from: minPrice,
        to: maxPrice,
      })}
    `,
      setFilteredData
    );
  };

  const clickCleanHandler = () => {
    setSelectValue('Страна и город');
    setMinPrice('');
    setMaxPrice('');
    fetchData(baseURL, setFilteredData);
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
            {places &&
              places.map(place => (
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
