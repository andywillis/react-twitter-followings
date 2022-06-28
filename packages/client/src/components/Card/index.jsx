import { useState } from 'react';
import classnames from 'classnames';

import Image from '../Image';

import styles from './index.module.css';

function Card({ card }) {

  const [ isLoaded, setIsLoaded ] = useState(false);

  const { name, img, href } = card;

  function handleImageLoad() {
    setIsLoaded(true);
  }

  const cardStyle = classnames({
    [styles.card]: true,
    [styles.hidden]: !isLoaded
  });

  const anchorStyle = classnames({
    [styles.anchor]: true,
    [styles.disabled]: !isLoaded
  });

  return (
    <a href={href} className={anchorStyle}>
      <div className={styles.container}>
        <div className={cardStyle}>
          <div className={styles.details}>
            <Image src={img} alt={name} handleImageLoad={handleImageLoad} />
            <div className={styles.name}>
              {name}
            </div>
          </div>
          {/* <span className={styles.notification}>13</span> */}
        </div>
        {!isLoaded && <div>&nbsp;</div>}
      </div>
    </a>
  );

}

export default Card;
