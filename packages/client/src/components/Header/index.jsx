import styles from './index.module.css';

function Header({ title }) {
  return (
    <header className={styles.header}>
      {title}
    </header>
  );
}

export default Header;
