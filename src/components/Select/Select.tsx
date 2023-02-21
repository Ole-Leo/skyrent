import { Button } from '../Button/Button';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import styles from './styles.module.css';

export const Select = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.select}>
        Страна и город
        <span>
          <Arrow />
        </span>
      </button>

      <div className={styles.inputs}>
        <input type="text" placeholder="Цена от" className={styles.input} />
        <input type="text" placeholder="Цена до" className={styles.input} />
      </div>

      <Button>Подобрать</Button>
    </div>
  );
};
