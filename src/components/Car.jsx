import styles from "./Car.module.css";

import carImg from "../assets/imgs/cars/camaro.png";
import { IcSeat, IcLuggage, IcCart } from "./icons/Icons";

function Car() {
  return (
    <li className={styles.car}>
      <img src={carImg} />
      <h3>first class</h3>
      <p className={styles.subTitle}>camaro</p>
      <p>
        The Porsche 911 is a true icon in the sports car world, known for its
        sleek design, impressive performance, and superior handling. It's a
        two-door, two-seat coupe that's perfect for those who love to feel the
        wind in their hair and the road beneath their wheels.
      </p>

      <div className={styles.infos}>
        <div>
          <div className={styles.info}>
            <IcSeat />
            <span>4 Seats</span>
          </div>

          <div className={styles.info}>
            <IcLuggage />
            <span>4 Luggages</span>
          </div>
        </div>

        <button className={styles.addToCart}>
          <span>+ Add to Cart</span>
          <IcCart />
        </button>
      </div>
    </li>
  );
}

export default Car;
