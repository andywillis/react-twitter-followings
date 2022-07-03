import Card from '../Card';

import styles from './index.module.css';

function Grid({ data, randomSource }) {
  return (
    <main className={styles.grid}>
      {data.map(card => {
        return (
          <Card
            key={card.name}
            card={card}
            randomSource={randomSource}
          />
        );
      })}
    </main>
  );
}

export default Grid;
