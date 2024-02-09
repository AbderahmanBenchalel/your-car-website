import { useCartContext } from "../context/CartContext";
import styles from "./CarAmount.module.css";

function CarAmount({ amount, carName }) {
  const { dispatch } = useCartContext();
  function handleIncreaseAmount() {
    dispatch({ type: "product/increase", payload: carName });
  }
  function handleDecreaseAmount() {
    dispatch({ type: "product/decrease", payload: carName });
  }
  return (
    <span className={styles.counter}>
      <button onClick={handleDecreaseAmount}>-</button>
      <span>{amount}</span>
      <button onClick={handleIncreaseAmount}>+</button>
    </span>
  );
}

export default CarAmount;
