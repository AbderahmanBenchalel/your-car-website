import styles from "./Spinner.module.css";
function Spinner() {
  return (
    <div className={styles.box}>
      <div className={`${styles.b} ${styles.b1}`}></div>
      <div className={`${styles.b} ${styles.b2}`}></div>
      <div className={`${styles.b} ${styles.b3}`}></div>
      <div className={`${styles.b} ${styles.b4}`}></div>
    </div>
  );
}

export default Spinner;
