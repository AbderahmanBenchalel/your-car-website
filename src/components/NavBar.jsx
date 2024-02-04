import styles from "./NavBar.module.css";
import { IcCart, IcHamburgerMenu } from "../components/icons/Icons";

function NavBar() {
  return (
    <nav className={`${styles.navbar} ${styles.navWhite}`}>
      <span className={styles.logo}>
        <strong>Your</strong>Car
      </span>

      <span className={`${styles.navigation} ${""}`}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Cars</a>
        <a href="">Contact</a>
      </span>
      <button className={styles.cartBtn}>
        <span>9</span>
        <IcCart />
      </button>
      <button className={styles.menuBtn}>
        <IcHamburgerMenu />
      </button>
    </nav>
  );
}

export default NavBar;
