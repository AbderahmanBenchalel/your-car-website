import { IcArrowUpRight } from "./icons/Icons";
import NavBar from "./NavBar";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header} id="home">
      <NavBar />

      <h1 className={styles.title}>Find the perfect car for you at YourCar.</h1>
      <p className={styles.description}>
        We offer a wide range of cars that cater to your needs and budget. Visit
        us today and drive away with your dream car!
      </p>
      <button className={styles.cta}>
        Discover <IcArrowUpRight />
      </button>
    </header>
  );
}

export default Header;
