import { Card } from './Card';
import { ICard } from '../../models/types';
import { useEffect, useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './styles.module.css';

type Props = {
  data: ICard[];
  isLoading?: boolean;
};

export const Cards = ({ data, isLoading }: Props) => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    if (data) setCards(data);
  }, [data]);

  const cardList = cards.map(card => <Card card={card} key={card.pk} />);

  return (
    <div className={styles.cards}>
      {!isLoading ? (
        cards.length > 0 ? (
          cards && cardList
        ) : (
          <p className={styles.error}>По вашему запросу вариантов не найдено</p>
        )
      ) : (
        <Skeleton
          count={3}
          baseColor="#d9d9d9"
          highlightColor="#e1e1e1"
          className={styles.skeleton}
        />
      )}
    </div>
  );
};
