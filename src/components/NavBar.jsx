import styles from "./NavBar.module.css";
import { IcCart } from "../components/icons/Icons";

const { navbar, logo, navigation, cartBtn, navWhite } = styles;

function NavBar() {
  return (
    <nav className={`${navbar} ${navWhite}`}>
      <span className={logo}>
        <strong>Your</strong>Car
      </span>

      <span className={navigation}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Cars</a>
        <a href="">Contact us</a>
      </span>
      <button className={cartBtn}>
        <span>9</span>
        <IcCart />
      </button>
    </nav>
  );
}

export default NavBar;
