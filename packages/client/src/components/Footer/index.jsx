import styles from './index.module.css';

function Footer({ message }) {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>{message}</h2>
    </footer>
  );
}

export default Footer;
