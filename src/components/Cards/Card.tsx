import { Link } from 'react-router-dom';
import { ICard } from '../../models/types';

import styles from './styles.module.css';

type Props = {
  card: ICard;
};

export const Card = ({ card }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={card.picture_url} alt={card.city} />
      </div>
      <h3 className={styles.title}>
        <Link className={styles.link} to={`/place/${card.pk}`}>
          {card.country} &rarr; {card.city}
        </Link>
      </h3>
      <p className={styles.description}>{card.description}</p>
      <h3 className={styles.title}>$ {card.price} / month</h3>
    </div>
  );
};
