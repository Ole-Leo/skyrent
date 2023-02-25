import { Link } from 'react-router-dom';
import { ICard } from '../../models/types';

import styles from './styles.module.css';

type Props = {
  card: ICard;
};

export const Card = ({ card }: Props) => {
  return (
    <Link className={styles.card} to={`/place/${card.pk}`}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={card.picture_url} alt={card.city} />
      </div>
      <h3 className={styles.title}>
        {card.country} &rarr; {card.city}
      </h3>
      <p className={styles.description}>{card.description}</p>
      <h3 className={styles.price}>$ {card.price} / month</h3>
    </Link>
  );
};
