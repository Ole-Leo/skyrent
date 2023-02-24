import { ICard } from '../../models/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../utils.ts/utils';
import { baseURL } from '../../utils.ts/constants';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import { Navigation } from '../../components/Navigation/Navigation';

export const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState<ICard>();

  useEffect(() => {
    fetchData(`${baseURL}${id}`, setPlace);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      {place && <PlaceCard card={place} />}
    </>
  );
};
