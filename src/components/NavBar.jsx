import styles from "./NavBar.module.css";
import { IcCart, IcHamburgerMenu } from "../components/icons/Icons";
import { useCartContext } from "../context/CartContext";

function NavBar() {
  const { isNavOpen, dispatch } = useCartContext();

  return (
    <nav className={`${styles.navbar} ${styles.navWhite}`}>
      <span className={styles.logo}>
        <strong>Your</strong>Car
      </span>

      <span
        className={`${styles.navigation} ${
          isNavOpen ? styles.open : styles.close
        }`}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#cars">Cars</a>
        <a href="#contact">Contact</a>
      </span>

      <button
        className={styles.cartBtn}
        onClick={() => dispatch({ type: "cart/toggle" })}
      >
        <span>9</span>
        <IcCart />
      </button>

      <button
        className={styles.menuBtn}
        onClick={() => dispatch({ type: "nav/toggle" })}
      >
        <IcHamburgerMenu />
      </button>
    </nav>
  );
}

export default NavBar;
