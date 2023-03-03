import { ICard } from '../../models/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../utils.ts/constants';
import { useFetchHook } from '../../hooks/useFetchHook';
import { PlaceCard } from '../../components/PlaceCard/PlaceCard';
import { Navigation } from '../../components/Navigation/Navigation';
import { SkeletonLayout } from '../../components/SkeletonLayout/SkeletonLayout';

export const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState<ICard>();

  const { data, isLoading } = useFetchHook(`${baseURL}${id}`);

  useEffect(() => {
    if (data) setPlace(data);
  }, [data, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      {!isLoading ? (
        place?.pk ? (
          <PlaceCard card={place} />
        ) : (
          <p style={{ marginBottom: '66px', fontSize: '18px', opacity: '0.6' }}>
            Локация не найдена или была удалена
          </p>
        )
      ) : (
        <SkeletonLayout />
      )}
    </>
  );
};
