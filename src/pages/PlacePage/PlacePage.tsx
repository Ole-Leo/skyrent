import { ICard } from '../../models/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../utils.ts/constants';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import { Navigation } from '../../components/Navigation/Navigation';
import { useFetchHook } from '../../hooks/useFetchHook';

export const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState<ICard>();

  const { data } = useFetchHook(`${baseURL}${id}`);

  useEffect(() => {
    if (data) setPlace(data);
  }, [data, id]);

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
