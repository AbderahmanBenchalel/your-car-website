import styles from "./Car.module.css";
const { car, subTitle, info, infos, counter } = styles;

import carImg from "../assets/imgs/cars/camaro.png";
import seatIcon from "../assets/icons/seat.svg";
import luggageIcon from "../assets/icons/luggage.svg";
import CarAmount from "./CarAmount";
import { IcCart } from "./icons/Icons";

function Car() {
  return (
    <article className={car}>
      <img src={carImg} />
      <h3>first class</h3>
      <p className={subTitle}>camaro</p>
      <p>
        The Porsche 911 is a true icon in the sports car world, known for its
        sleek design, impressive performance, and superior handling. It's a
        two-door, two-seat coupe that's perfect for those who love to feel the
        wind in their hair and the road beneath their wheels.
      </p>

      <li className={infos}>
        <div>
          <div className={info}>
            <img src={seatIcon} />
            <span>4 Seats</span>
          </div>

          <div className={styles.info}>
            <img src={luggageIcon} />
            <span>4 Luggages</span>
          </div>
        </div>

        <button className={styles.addToCart}>
          <span>+ Add to Cart</span>
          <IcCart />
        </button>
      </li>
    </article>
  );
}

export default Car;
