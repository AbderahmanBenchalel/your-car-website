import styles from "./CarAmount.module.css";

function CarAmount() {
  return (
    <span className={styles.counter}>
      <button>-</button>
      <span>7</span>
      <button>+</button>
    </span>
  );
}

export default CarAmount;
