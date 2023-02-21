import { CardData } from '../../models/mockData';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import { Navigation } from '../../components/Navigation/Navigation';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const PlacePage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <PlaceCard card={CardData[Number(id) - 1]} />
    </>
  );
};
