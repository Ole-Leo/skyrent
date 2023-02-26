import cn from 'classnames';
import { ICard } from '../../models/types';
import { Button } from '../Button/Button';
import { ReactComponent as OnIcon } from '../../assets/done.svg';
import { ReactComponent as OffIcon } from '../../assets/close.svg';
import { useState } from 'react';
import { HostContacts } from '../HostContacts/HostContacts';
import styles from './styles.module.css';

type Props = {
  card: ICard;
};

export const PlaceCard = ({ card }: Props) => {
  const [isContactShown, setIsContactShown] = useState(false);

  const clickHandler = () => {
    setIsContactShown(!isContactShown);
  };

  const featuresOnStyle = cn(styles.listItem, styles.listItemOn);
  const featuresOffStyle = cn(styles.listItem, styles.listItemOff);

  return (
    <div className={styles.place}>
      <h2 className={styles.title}>
        {card.country} &rarr; {card.city}
      </h2>
      <h3 className={styles.price}>$ {card.price} / month</h3>
      <p className={styles.description}>{card.description}</p>

      <div className={styles.imgWrapper}>
        <img className={styles.img} src={card.picture_url} alt={card.city} />
      </div>

      <h3 className={styles.features}>Что есть внутри?</h3>
      <ul className={styles.list}>
        {card.features_on?.split(',').map(item => (
          <li className={featuresOnStyle} key={item}>
            <OnIcon />
            <span>{item}</span>
          </li>
        ))}

        {card.features_off?.split(',').map(item => (
          <li className={featuresOffStyle} key={item}>
            <OffIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {!isContactShown && (
        <Button
          children="Показать контактную информацию"
          onClick={clickHandler}
        />
      )}
      {isContactShown && <HostContacts data={card} />}
    </div>
  );
};
