import { Link } from 'react-router-dom';
import { ICard } from '../../models/types';
import styles from './styles.module.css';

type Props = {
  props: ICard;
};

export const Card = ({ props }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={props.picture_url} alt={props.city} />
      </div>
      <h3 className={styles.title}>
        <Link className={styles.link} to={`/place/${props.pk}`}>
          {props.country} &rarr; {props.city}
        </Link>
      </h3>
      <p className={styles.description}>{props.description}</p>
      <h3 className={styles.title}>$ {props.price} / month</h3>
    </div>
  );
};
