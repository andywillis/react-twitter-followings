import styles from './index.module.css';

function Image({ alt, src }) {
  return (
    <div className={styles.img}>
      <img alt={alt} src={src} />
    </div>
  );
}

export default Image;
