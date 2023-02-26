import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './styles.module.css';

export const SkeletonLayout = () => {
  return (
    <>
      <Skeleton
        count={1}
        baseColor="#d9d9d9"
        highlightColor="#e1e1e1"
        className={styles.top}
      />
      <Skeleton
        count={1}
        baseColor="#d9d9d9"
        highlightColor="#e1e1e1"
        className={styles.img}
      />
      <Skeleton
        count={1}
        baseColor="#d9d9d9"
        highlightColor="#e1e1e1"
        className={styles.list}
      />
    </>
  );
};
