import Image from '../Image';

import styles from './index.module.css';

function Card({ card }) {

  const { name, img, href } = card;

  return (
    <a href={href}>
      <div className={styles.card}>
        <div className={styles.details}>
          <Image src={img} alt={name} />
          <div className={styles.name}>
            {name}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
