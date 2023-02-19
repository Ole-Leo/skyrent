import { useEffect, useState } from 'react';
import { ICard } from '../../models/types';
import { Card } from './Card';

import styles from './styles.module.css';

type Props = {
  data: ICard[];
};

export const Cards = ({ data }: Props) => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    if (data) setCards(data);
  }, [data]);

  return (
    <div className={styles.cards}>
      {cards && cards.map(card => <Card props={card} />)}
    </div>
  );
};
