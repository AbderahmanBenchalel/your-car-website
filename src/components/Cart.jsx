import { IcDelete } from "../components/icons/Icons";

import CarAmount from "./CarAmount";

import styles from "./Cart.module.css";
import { useCartContext } from "../context/CartContext";
import getImage from "../utility/getImage";

function Cart() {
  const { isCartOpen, cart, dispatch } = useCartContext();
  function handleEmptyCart() {
    dispatch({ type: "cart/deleteAll" });
  }

  return (
    <div
      className={`${styles.cart} ${isCartOpen ? styles.open : styles.close}`}
    >
      {cart.length ? (
        <>
          <ul>
            {cart.map((product, i) => (
              <Product details={product} key={i} />
            ))}
          </ul>
          <button className={styles.btnDeleteAll} onClick={handleEmptyCart}>
            <span>Delete All</span>
            <IcDelete />
          </button>
        </>
      ) : (
        <p className={styles.message}>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;

function Product({ details }) {
  const { dispatch } = useCartContext();

  function handleDeleteProduct() {
    dispatch({ type: "product/delete", payload: details.name });
  }
  return (
    <li className={styles.product}>
      <span className={styles.content}>
        <h3>{details.class}</h3>
        <p>{details.name}</p>
        <CarAmount amount={details.amount} carName={details.name} />
        <button className={styles.btnDelete} onClick={handleDeleteProduct}>
          <IcDelete />
        </button>
      </span>

      <picture>
        <img src={getImage(details.image)} />
      </picture>
    </li>
  );
}
