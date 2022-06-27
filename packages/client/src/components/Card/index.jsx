import styles from './index.module.css';

function Card({ card }) {
  return (
    <div className={styles.card}>
      {card.name}
    </div>
  );
}

export default Card;
