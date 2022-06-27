import Card from '../Card';

import styles from './index.module.css';

function Grid({ data }) {
  return (
    <div className={styles.grid}>
      {data.map(card => {
        console.log(card);
        return (
          <Card
            key={card.name}
            card={card}
          />
        );
      })}
    </div>
  );
}

export default Grid;
