import { IcDelete } from "../components/icons/Icons";

import CarAmount from "./CarAmount";

import styles from "./Cart.module.css";
import carImage from "../assets/imgs/cars/mercedes-benz-m-class.png";

function Cart() {
  return (
    <div className={`${styles.cart} ${styles.close}`}>
      <ul>
        <Product />
        <Product />
      </ul>

      <button className={styles.btnDeleteAll}>
        <span>Delete All</span>
        <IcDelete />
      </button>
    </div>
  );
}

export default Cart;

function Product() {
  return (
    <li className={styles.product}>
      <span className={styles.content}>
        <h3>SUV</h3>
        <p>Mercedes M class </p>
        <CarAmount />
        <button className={styles.btnDelete}>
          <IcDelete />
        </button>
      </span>

      <picture>
        <img src={carImage} />
      </picture>
    </li>
  );
}
