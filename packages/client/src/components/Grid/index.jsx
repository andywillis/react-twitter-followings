import Card from '../Card';

import styles from './index.module.css';

function Grid({ data }) {
  return (
    <main className={styles.grid}>
      {data.map(card => {
        console.log(card);
        return (
          <Card
            key={card.name}
            card={card}
          />
        );
      })}
    </main>
  );
}

export default Grid;
