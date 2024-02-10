import styles from "./NavBar.module.css";
import { IcCart, IcHamburgerMenu } from "../components/icons/Icons";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";

const anchorsList = ["home", "about", "services", "cars", "contact"];

function NavBar() {
  const [section, setSection] = useState(0);
  const { isNavOpen, dispatch, cart } = useCartContext();
  const inCart = cart.reduce((prev, curr) => curr.amount + prev, 0);

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
        {anchorsList.map((a, i) => (
          <a
            href={"#" + a}
            key={i}
            className={section === i ? styles.current : ""}
            onClick={() => setSection(i)}
          >
            {a}
          </a>
        ))}
      </span>

      <button
        className={styles.cartBtn}
        onClick={() => dispatch({ type: "cart/toggle" })}
      >
        {inCart > 0 && <span>{inCart}</span>}
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
