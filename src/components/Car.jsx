import styles from "./Car.module.css";
import { IcSeat, IcLuggage, IcCart } from "./icons/Icons";
import getImage from "../utility/getImage";
import { useCartContext } from "../context/CartContext";

function Car({ car }) {
  const { dispatch } = useCartContext();

  function handleAddToCart() {
    dispatch({ type: "cart/add", payload: car });
  }

  return (
    <li className={styles.car}>
      <img src={getImage(car.image)} />
      <h3>{car.class}</h3>
      <p className={styles.subTitle}>{car.name}</p>
      <p className={styles.description}>{car.description}</p>

      <div className={styles.infos}>
        <div>
          <div className={styles.info}>
            <IcSeat />
            <span>{car.seats} Seats</span>
          </div>

          <div className={styles.info}>
            <IcLuggage />
            <span>{car.luggage} Luggages</span>
          </div>
        </div>

        <button className={styles.addToCart} onClick={handleAddToCart}>
          <span>+ Add to Cart</span>
          <IcCart />
        </button>
      </div>
    </li>
  );
}

export default Car;
