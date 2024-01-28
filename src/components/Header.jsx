import arrow from "../assets/icons/arrow-up-right.svg";
import NavBar from "./NavBar";

import styles from "./Header.module.css";
const { header, title, description, cta } = styles;

function Header() {
  return (
    <header className={header}>
      <NavBar />

      <h1 className={title}>Find the perfect car for you at YourCar.</h1>
      <p className={description}>
        We offer a wide range of cars that cater to your needs and budget. Visit
        us today and drive away with your dream car!
      </p>
      <button className={cta}>
        Discover <img src={arrow} alt="arrow" />
      </button>
    </header>
  );
}

export default Header;
