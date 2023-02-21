import { ICard } from '../../models/types';

import styles from './styles.module.css';

type Props = {
  data: ICard;
};

export const HostContacts = ({ data }: Props) => {
  return (
    <div className={styles.contacts}>
      <div>
        <h2 className={styles.title}>Имя хоста</h2>
        <h3 className={styles.subtitle}>{data.host_name}</h3>
      </div>
      <div>
        <h2 className={styles.title}>Телефон</h2>
        <h3 className={styles.subtitle}>{data.host_phone}</h3>
      </div>
      <div>
        <h2 className={styles.title}>Адрес</h2>
        <h3 className={styles.subtitle}>{data.host_location}</h3>
      </div>
    </div>
  );
};
