import styles from "../../styles/Home.module.css";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.Header}>
        <h1 className={styles.headerTitle}>Where in the world ?</h1>
        <h2 className={styles.headerDarkMode}>Dark Mode</h2>
      </div>
    </header>
  );
}

export default Header;
