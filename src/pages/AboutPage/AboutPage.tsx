import { Navigation } from '../../components/Navigation/Navigation';
import { ReactComponent as OnIcon } from '../../assets/done.svg';

import styles from './styles.module.css';

export const AboutPage = () => {
  return (
    <>
      <Navigation />
      <p className={styles.text}>
        Skyrent – MVP сервиса доски объявлений по длительной аренде жилья для
        релокации. Позволяет просматривать карточку, фильтровать и просматривать
        контакты арендатора.
      </p>

      <h2 className={styles.title}>Над проектом работали</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <OnIcon />
          <span>
            Frontend{' '}
            <a
              href="https://github.com/Ole-Leo"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              @Ole-Leo
            </a>
          </span>
        </li>
        <li className={styles.listItem}>
          <OnIcon />
          <span>
            Backend{' '}
            <a
              href="https://github.com/Maksim-Hakimov"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              @Maksim-Hakimov
            </a>
          </span>
        </li>
        <li className={styles.listItem}>
          <OnIcon />
          <span>
            QA-engineer{' '}
            <a
              href="https://github.com/ShDemian"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              @ShDemian
            </a>
          </span>
        </li>
      </ul>
    </>
  );
};
